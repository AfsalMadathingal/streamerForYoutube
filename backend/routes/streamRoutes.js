import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import ffmpeg from 'fluent-ffmpeg';

// Set up Multer storage and file handling
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Set uploads folder
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${Date.now()}${ext}`); // Unique file name
  }
});

// Initialize multer with storage
const upload = multer({ storage });

const router = express.Router();

router.post('/', upload.single('video'), (req, res) => {
  const videoFile = req.file.path; // Get the uploaded file path
  const streamKey = req.body.streamKey; // Get stream key from request body

  // FFmpeg command to stream the video to YouTube
  ffmpeg(videoFile)
  .inputOptions(['-re'])  // Real-time streaming
  .inputFormat('mp4')
  .videoCodec('libx264')
  .audioCodec('aac')
  .format('flv')
  .outputOptions([
    '-preset veryfast',
    '-maxrate 3000k',
    '-bufsize 6000k',
    '-pix_fmt yuv420p',
    '-g 50',
    '-r 30',
    '-b:a 128k',
    '-strict experimental',  
    '-f flv'
  ])
  .output(`rtmp://a.rtmp.youtube.com/live2/${streamKey}`)
  .on('start', (cmd) => {
    console.log(`FFmpeg command: ${cmd}`);
    res.send('Streaming started to YouTube...');
  })
  .on('error', (err) => {
    console.error('Error streaming to YouTube: ', err.message);
    if (!res.headersSent) {
        return res.status(500).send('Error streaming to YouTube');
      }
  })
  .on('end', () => {
    console.log('Streaming finished!');
    fs.unlinkSync(videoFile);  
  })
  .run();

});

export default router;
