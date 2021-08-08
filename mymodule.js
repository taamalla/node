const fs = require('fs');
const path = require('path');
module.exports = (dir, ext, calback) => {
    ext = `.${ext}`;
    fs.readdir(dir, (err, list) =>{
        if (err) return calback(err);
        const filtered = list.filter(file =>{
            return path.extname(file) === ext;
        });
        return calback(null, filtered);
    })
}