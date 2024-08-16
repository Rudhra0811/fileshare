const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const fs = require('fs');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(cors());
app.use(express.json());

// Ensure uploads directory exists
if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads');
}

// File upload route
app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    res.json({
        id: req.file.filename,
        name: req.file.originalname,
        size: req.file.size
    });
});

// File download route
app.get('/download/:id', (req, res) => {
    const file = path.join(__dirname, 'uploads', req.params.id);
    res.download(file);
});

// Get all files
app.get('/files', (req, res) => {
    fs.readdir('uploads', (err, files) => {
        if (err) {
            return res.status(500).send('Error reading files');
        }
        const fileList = files.map(filename => {
            const stats = fs.statSync(path.join('uploads', filename));
            return {
                id: filename,
                name: filename,
                size: stats.size
            };
        });
        res.json(fileList);
    });
});

// Delete file
app.delete('/files/:id', (req, res) => {
    const file = path.join(__dirname, 'uploads', req.params.id);
    fs.unlink(file, (err) => {
        if (err) {
            return res.status(500).send('Error deleting file');
        }
        res.status(200).send('File deleted successfully');
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));