const express = require('express');
const router = express.Router()
const Person = require('./../models/person')


router.post("/", async (req, res) => {
    try {
        const data = req.body;
  const newPerson = new Person(data);
        const response = await newPerson.save()
        console.log('data saved')
        res.status(200).json(response)
    } catch (error) {
        console.log("error occured")
        res.status(500).json({error: 'internal server error'})
    };
});

router.get("/", async (req, res) => {
    try {
      const persons = await Person.find({});
      res.status(200).json(persons);
    } catch (error) {
      console.log("Error retrieving persons:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });


  router.get('/:work', async(req,res)=>{
    try {
      const workType = req.params.work;
      if(workType=='chef'||workType=='manager'||workType=='waiter'){
        const response = await Person.find({work: workType});
        console.log('response fetched');
        res.status(200).json(response);
      }else{
  console.log('error')
  res.status(500).json('internal server error')
      }
  
    } catch (error) {
      console.log("error")
      res.status(500).json({error:'Internal server error'})
    }
  } 
  )
router.put('/:id', async(req,res)=>{
    try {
        const personId = req.params.id
    const updatedPersonData = req.body
    const response = await Person.findByIdAndUpdate(personId,updatedPersonData,{
        new: true,
        runValidators: true
    })
    if(!response){
        res.status(404).json({error: 'person not found'})
    }
    console.log('Person data updated')
    res.status(200).json(response)

    } catch (error) {
        res.status(500).json({error: 'internal server error'})
    }
})
module.exports = router
