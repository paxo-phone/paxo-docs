# File System

Instructions for deploying the file system to the Paxophone's SD card.

## Prerequisites

- An SD card:
  - Micro SDHC type.
  - No minimum capacity recommended (the basic content is lightweight).
  - Formatted in FAT32.
- A PC with a microSD card reader.
- A web browser with access to GitHub (no account required).

<!-- Info Block -->
> ℹ️ **Info**
>
> > The card provided in the 2025 Kickstarter kit is a:
> >
> > - `micro SDHC` type
> > - `C10` and `U1` speed class
> > - `UHS-1` bus interface
> > - `16GB` capacity

<!-- Tip Block -->
> 💡 **Tip**
>
> > For those allergic to graphical interfaces, the procedure can be entirely performed from the command line 😉

## Downloading the Files

Using a web browser, go to the [official GitHub repository for PaxOS 9.](https://github.com/paxo-phone/PaxOS-9/)  
Click the **"Code"** button and then **"Download ZIP"** to download the complete project archive.
![Screenshot1](/img/screenshots/Filesystem-3.png)

In a file manager (Explorer, Finder, Nautilus, etc.), decompress the archive.  
Navigate to the **"Storage"** directory and select and copy its <u>contents</u>.
![Screenshot1](/img/screenshots/Filesystem-5.png)

## Copying the Files to the microSD Card

Go to the root of the microSD card and paste the <u>contents</u> there.
![Screenshot1](/img/screenshots/Filesystem-6.png)

Eject/unmount/safely remove the microSD card from the system and then physically remove it from the computer.

## Using the microSD Card

Insert the microSD card into the designated slot on the Paxophone (refer to the [last steps of the assembly instructions](/docs/installation/assembly)).
Restart the device or press the `reset` button.
