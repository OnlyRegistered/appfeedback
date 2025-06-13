# Rename extension uppercase lowercase - Reuclc.exe

---

## Overview

This is a Node.js-based application tool that helps you rename file extensions in bulk, converting them either to uppercase or lowercase. It's designed to efficiently rename files with specific extensions within a chosen directory and its sub directories.

The tool supports a dry-run mode for previewing changes without modifying files and logs all operations to a log file.

---

## Features

- Rename file extensions recursively in a directory.
- Choose which extensions to rename (e.g. jpg, gif, mpg).
- Convert extensions to uppercase or lowercase, based on user input.
- Dry-run mode to preview changes before applying.
- Logs all operations and errors to `serverWEBP.log`.
- Saves your target directory in a `.env` file for convenience.

---

The App will prompt you for:

1. The directory path where files are located.
2. Whether you want to convert extensions to uppercase (`UP`) or lowercase (`LOW`).
3. Which extensions you want to rename (comma-separated, e.g. `jpg, gif, mpg`).
4. Whether you want to perform a dry-run (preview changes without renaming).

You will see console output for all operations, including renaming actions or dry-run previews.

---

## Log File

All actions and errors are logged in `serverWEBP.log` in the same directory as the script.

---

## Notes

- The directory you specify is saved in a `.env` file for future runs.
- The script ignores certain system folders like `$RECYCLE.BIN`, `Recovery`, and `System Volume Information`.
- Dry-run mode is recommended for the first run to ensure correct operation.

---

## License

This tool is provided as-is for personal and professional use. Use responsibly.

---

Created by Spaxsum™
https://onlyregistered.itch.io/