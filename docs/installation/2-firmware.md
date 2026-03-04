# Firmware Update

Instructions for installing the firmware on the ESP.

## Method via the browser (recommended)

### Prerequisites

- Assembled Paxophone.
- USB-C to USB-A or USB-C cable (depending on the type of port available on the computer).
- Chrome or Edge browser.

<!-- Info Block -->
> ℹ️ **Info**
>
> > This documentation was created from a computer running `Fedora43` and `Chrome144`.

### In the browser

Go to the [Paxophone website](https://www.paxo.fr/flash).  
In the menu in the top right corner, click on **"Flash"**.
![Screenshot1](/img/screenshots/Firmware-1.png)

### Connecting the Paxophone

Connect the powered-on Paxophone to the USB port on your computer.

1. Click the **"Connect & install PaxOS-9"** button.
2. Select the port to which the Paxophone is connected (usually contains "USB" in its name).
3. Click the **"Connect"** button.
![Screenshot4](/img/screenshots/Firmware-4.png)

### Starting the installation

If the Paxophone is recognized on the port, a window will appear offering to install the PaxOS system.  
Click **"Install PaxOS9 Alpha"**.
![Screenshot5](/img/screenshots/Firmware-5.png)

A window will offer to erase the device.  
Leave the checkbox unchecked and click **"Next"**.
![Screenshot6](/img/screenshots/Firmware-6.png)

A confirmation window will appear.  
Click **"Install"**.
![Screenshot7](/img/screenshots/Firmware-7.png)

The installation will begin, and the progress will be displayed.  
Approximately 2 minutes are required to complete this step.
![Screenshot8](/img/screenshots/Firmware-8.png)

## End of the procedure

The installation is now complete.  
Click **"Next"**.  
Disconnect the Paxophone.
![Screenshot9](/img/screenshots/Firmware-9.png)

## Manual Method

It is possible to compile the system from the source code and flash the Paxophone using PlatformIO.
The instructions are detailed directly in the [PaxOS GitHub repository](https://github.com/paxo-phone/PaxOS-9/#getting-started).
