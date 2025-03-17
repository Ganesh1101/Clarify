const express = require('express');
const router = express.Router();
const {
    getAudits,
    getAuditById,
    createAudit,
    updateAudit,
    deleteAudit
} = require('../controllers/auditController');

// Define routes
router.get('/', getAudits);
router.get('/:id', getAuditById);
router.post('/', createAudit);
router.put('/:id', updateAudit);
router.delete('/:id', deleteAudit);

module.exports = router;
