const axios = require('axios');

module.exports = async function verifyStudentOwnership(req, res, next) {
    try {
        const requester = req.user; // from auth middleware
        const studentId =
            req.params.studentId ||
            req.query.studentId ||
            req.body.userId;

        if (!studentId) {
            return res.status(400).json({
                success: false,
                message: 'studentId is required',
            });
        }

        // STUDENT can only access own data
        if (requester.role === 'STUDENT') {
            if (requester.id !== studentId) {
                return res.status(403).json({
                    success: false,
                    message: 'Access denied',
                });
            }
            return next();
        }

        // COUNSELLOR → verify via auth-service
        if (requester.role === 'COUNSELLOR') {
            const resp = await axios.get(
                `${process.env.AUTH_URL}/auth/internal/verify-student-ownership`,
                {
                    params: {
                        counsellorId: requester.id,
                        studentId,
                    },
                    headers: {
                        // ✅ forward cookies to auth-service
                        Cookie: req.headers.cookie,
                    },
                }
            );


            if (!resp.data?.success) {
                return res.status(403).json({
                    success: false,
                    message: 'You are not authorized to access this student',
                });
            }

            return next();
        }

        return res.status(403).json({
            success: false,
            message: 'Invalid role',
        });
    } catch (err) {
        next(err);
    }
};
