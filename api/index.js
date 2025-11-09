const express = require('express');
const app = express();
const PORT = 5001;
const objectsRoutes = require('../routes/objectsRoutes');

// and now am not gonna lie at all i needed to add this cors stuff and i have no clue what it is
//i tried reading about it and i don't understand at all
//please help Boss *praying emoji* *crying emoji*
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use('/objects', objectsRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});