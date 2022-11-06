import Site from '../models/siteModel.js'
// asyncHandler is used to simplify the syntax of the promise catch error handling
import asyncHandler from 'express-async-handler'

// show all sites
// GET /api/sites
// Public
export const getSites = asyncHandler(async (req, res) => {
    const sites = await Site.find()
    res.status(200)
    res.json(sites)
})

// show one site
// GET /api/sites/:id
// Public
export const getOneSite = asyncHandler(async (req, res) => {
    const site = await Site.findById(req.params.id)
    if (site){
        res.status(200)
        res.json(site)
    } else {
        res.status(404)
        throw new Error('not found this site!')
    }
})


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// update one site
// POST /api/sites
// only admin
export const createSite = asyncHandler(async (req, res) => {
    const site = new Site({
        user: req.user._id,
        name: "name of the site",
        description: "description of the site",
        rating: 4,
        numComments: 0,
        image: "path of the image",
        category: "category of the site"
    })
    const createdSite = await site.save()
    res.status(201).json(createdSite)
})

// update one site
// PUT /api/sites/:id
// only admin
export const updateSite = asyncHandler(async (req, res) => {
    const {
        name,
        description,
        rating,
        numComments,
        image,
        category
    } = req.body
    const site = await Site.findById(req.params.id)
    if (site) {
        site.name = name
        site.description = description
        site.rating = rating
        site.numComments = numComments
        site.image = image
        site.category = category
        const updateSite = await site.save()
        res.status(201).json(updateSite)
    } else {
        res.status(404).json('Site not found!')
    }
})

// user profile
// GET /api/users/profile
// only admin
export const deleteSite = asyncHandler(async (req, res) => {
    const site = await Site.findById(req.params.id)
    if (site) {
        await site.remove()
        res.json({message: 'Site removed successfully!'})
    } else {
        res.status(404)
        throw new Error('not found this site!')
    }
})
