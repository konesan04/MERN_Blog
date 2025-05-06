const express = require('express');
const router = express.Router();
const Category = require("../models/Category")

//Get all categories
router.get("/", async(req, res)=>{
    try{
        const categories = await Category.find()
        res.json(categories)
    }catch(erroe){
        res.status(500).json({message: error.message})
    }
})


// Get a single category by ID
router.get('/:id', async (req, res) => {
    try{
        const category = await Category.findById(req.params.id);
        if (!category) return res.status(404).json({ message: 'category not found' });
        res.status(200).json(category);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
})


// Create a new category
router.post('/', async (req, res) => {
    const category = new Category({
        name: req.body.name,
        slug: req.body.slug,
        description: req.body.description,
    })

    try {
        const newCategory = await category.save();
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

})

// Update a category
router.put('/:id', async (req, res) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id)
        if (!category) return res.status(404).json({ message: 'category not found' });
        category.name = req.body.name || category.name;
        category.slug = req.body.slug || category.slug;
        category.description = req.body.description || category.description; 
        category.updatedAt = Date.now();
        const updatedcategory = await category.save();  
        res.status(200).json(updatedcategory);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
)

// Delete a post
router.delete('/:id', async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) return res.status(404).json({ message: 'category not found' });
        await Category.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Category deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

module.exports = router;
