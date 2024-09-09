// ==UserScript==
// @name        CATGPT
// @version      1.0
// @license MIT
// @description  Script to automate file uploading process on specified websites.
// @author       Pro-Fessional
// @match        *://example.com/*  // Change this to the website's URL where you want to upload files
// @grant        none
// @run-at       document-end
// @namespace    https://greasyfork.org/users/1090501
// ==/UserScript==

(function () {
    'use strict';

    // Function to trigger file upload
    function triggerFileUpload(filePath) {
        const input = document.querySelector('input[type="file"]');  // Adjust selector as needed
        if (input) {
            // Create a new DataTransfer object to handle the file
            const dataTransfer = new DataTransfer();
            const file = new File([new Blob(['file content'])], filePath, { type: 'application/octet-stream' });
            dataTransfer.items.add(file);
            input.files = dataTransfer.files;
            input.dispatchEvent(new Event('change', { bubbles: true }));
        } else {
            console.error('File input element not found.');
        }
    }

    // Example usage: Trigger upload of a file named "example.txt"
    triggerFileUpload('example.txt');
})();
