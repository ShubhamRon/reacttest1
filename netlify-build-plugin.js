module.exports = {
  onPostBuild: ({ utils }) => {
    const fs = require('fs');
    const path = require('path');

    const buildDir = 'build';
    const indexPath = path.join(buildDir, 'index.html');

    // Read the index.html file
    let indexHtml = fs.readFileSync(indexPath, 'utf8');

    // Replace asset paths
    indexHtml = indexHtml.replace(/href="\//g, 'href="/healthcare/');
    indexHtml = indexHtml.replace(/src="\//g, 'src="/healthcare/');

    // Write the modified index.html file
    fs.writeFileSync(indexPath, indexHtml);

    console.log('Successfully updated asset paths in index.html');
  },
};
