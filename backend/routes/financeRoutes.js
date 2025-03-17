const express = require('express');
const router = express.Router();
const {
    getFinanceRecords,
    getFinanceRecordById,
    createFinanceRecord,
    updateFinanceRecord,
    deleteFinanceRecord
} = require('../controllers/financeController');

// Define routes
router.get('/', getFinanceRecords);
router.get('/:id', getFinanceRecordById);
router.post('/', createFinanceRecord);
router.put('/:id', updateFinanceRecord);
router.delete('/:id', deleteFinanceRecord);

module.exports = router;