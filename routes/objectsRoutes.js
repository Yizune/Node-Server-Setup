let objects = [
  { id: 1, name: 'One' },
  { id: 2, name: 'Two' },
  { id: 3, name: 'Three' },
  { id: 4, name: 'Four' },
  { id: 5, name: 'Five' },
  { id: 6, name: 'Six' },
  { id: 7, name: 'Seven' },
  { id: 8, name: 'Eight' },
  { id: 9, name: 'Nine' },
  { id: 10, name: 'Ten' },
];

const express = require('express');
const router = express.Router();

//slightly remodeled by gpt for the sake of feedback and readability, also cuz i had hard time understanding at the start

//this was the hardest part and i needed shit ton of help for it

router.get('/', (req, res) => {
    res.json(objects);
});

router.get('/search', (req, res) => {
    const { search } = req.query; 
    if (search) {
        const filteredObjects = objects.filter(obj =>
            obj.name.toLowerCase().includes(search.toLowerCase())// because of this part mostly
        );
        res.json(filteredObjects); 
    } else {
        res.json(objects); 
    }
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const object = objects.find(obj => obj.id === id); 

    if (object) {
        res.json({ message: 'Object found successfully', object });
    } else {
        res.status(404).json({ message: 'Object not found' }); 
    }
});

//this had me confused as hell am not gonna lie, but it's not because of the post method but because of what i needed to have it do
router.post('/', (req, res) => {
    const { name } = req.body; 
    const newId = objects.length ? objects[objects.length - 1].id + 1 : 1; 
    const newObject = { id: newId, name }; 
    objects.push(newObject); 
    res.status(201).json({ message: 'Object created successfully', object: newObject });
});

router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const object = objects.find(obj => obj.id === id); 

    if (object) {
        object.name = req.body.name; // TOOK ME SO LONG TO REALIZE THIS SHIT WILL BE CHANGED IN POSTMAN AND NOT CODE 
        res.json({ message: 'Object updated successfully', object });
    } else {
        res.status(404).json({ message: 'Object not found' }); 
    }
});

router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const object = objects.findIndex(obj => obj.id === id); 

    if (object !== -1) {
        objects.splice(object, 1); 
        res.json({ message: 'Object deleted successfully'});
    } else {
        res.status(404).json({ message: 'Object not found' }); 
    }
});

module.exports = router;