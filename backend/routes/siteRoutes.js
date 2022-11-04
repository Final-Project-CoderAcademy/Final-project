import express from 'express'
import {
    getSites, 
    getOneSite, 
    deleteSite,
    createSite,
    updateSite
} from '../controller/siteController.js'
import {authUser, authAdmin} from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').get(getSites).post(authUser, authAdmin, createSite)
router.route('/:id').get(getOneSite).put(authUser, authAdmin, updateSite).delete(authUser, authAdmin, deleteSite)

export default router