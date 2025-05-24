import detailsModel from "../model/dataModel.js";
import { body, validationResult } from "express-validator"


export const postDetails = [
    body('title').notEmpty().withMessage('Title is required'),
    body('price').notEmpty().withMessage('Price is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('categories').isArray().withMessage('Categories must be an array'),
    body('image').isString().withMessage('Image must be a valid URL')
    , async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const { title, description, categories, image } = req.body;
            // if()
            const postDetails = await detailsModel.create({ title, description, categories, image })
            res.status(200).json(postDetails)
        } catch (error) {
            res.status(500).json({ error: error.message })

        }
    }]

export const getDetails = async (req, res) => {
    try {
        const getDetail = await detailsModel.find({})
        res.status(200).json(getDetail)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}