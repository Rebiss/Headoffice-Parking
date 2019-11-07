# Camera Analytics Software for Business.

### Introduction

Camlytics is multi-camera management, recording and video analysis software, that has a wide range of applications: people counting, vehicle counting, retail analytics, traffic analytics, complicated motion alarms, video events generation via API or webhooks, video events recording. Camlytics can be also used for simple recording suitable for home and business. It also has many instruments for collecting statistics and building heatmaps and track maps. Capabilities that Camlytics offers can be extremely useful in such industries as retail, transport or security. Compared to bulky and expensive enterprise surveillance solutions, Camlytics is a really budget lightweight software that can be used with any cheap webcam or IP camera.

The huge advantage of Camlytics is that it supports camera events API that empowers developers to use it in any own surveillance or video analysis/collection software.

This manual is a detailed guide to how Camlytics works, what it can do and how you can get the most out of it. Throughout this guide we assume you have the premium version of Camlytics and so have access to camera calibration and video analysis modules. Without video analysis modules you are missing out on a large part of the functionality available within Camlytics.

### Supported Operating Systems

Camlytics currently works on Windows based PCs only (both x86 and 64 bit versions). Camlytics has been tested on Windows Vista, Windows 7, Windows 8, Windows 10 and Windows Server but may work on other Windows variants that support the .Net Framework v4.5 client.

### Recommended Hardware

Hardware recommendations vary a lot depending on how many cameras and resolutoins you will be using. A modern PC with 2GB of RAM and 200 GB of free hard disk space should be capable of running 4 cameras simultaneously at 320 x 240 resolution with people counting enabled. For best performance you are recommended to have an intel i7 or similar processor with >= 4 GB of RAM.

### Performance tips

Camlytics will let you add an unlimited number of cameras - right up to the point where your computer cannot cope and will freeze. Keep an eye on the performance counters on the status bar of Camlytics as they will tell you when you are running out of memory or CPU. Note that CPU can spike when recording started. There are a number of things you can do to squeeze better performance out of Camlytics:

- You can minimize the application (it will go to system tray by default), this will reduce the image drawing impact thus reducing the CPU usage

- You can increase the number of cameras by **decreasing the resolution** of each camera – one 1280 x 960 camera requires the same processing power of 4 cameras at 640 x 480 cameras or 16 cameras at 320 x 240

- Having a dedicated PC running Camlytics ensures that user interaction or other software won’t interrupt the video processing tasks

- **Disabling Camera events** will improve performance dramatically but is suitable when only plain camera recording and viewing is only needed

You can also set the display frame rate general settings, which might slightly reduce CPU load.
Common causes for program freeze this are multiple simultaneous recordings or scheduled tasks like disk defragmenting. Of course the better the hardware the better results you will get from Camlytics.

### General settings

Here is the brief description of Camlytics general settings.

![alt text](https://camlytics.com/help/images/global_settings.png)

**Language** is responsible for application wide language.
**Display framerate** configures refresh rate of video in user interface. Reducing its value may improve performance in case of multiple HD channels added.
This setting does not affect video recording frame rate.
**Reconnect after** defines time in seconds, which Camlytics waits before trying to connect to disconnected camera.
**Database events lifetime** determines how long Camlytics should keep all camera events and heatmap data in it's database. The bigger value the more disk space the database file will take.
**Hide to the system tray** enables hiding Camlytics to the system tray to run in background.
**Show intro on startup** turns on notificartions on application startup.
**Enable REST API** turns on or off the API.

![alt text](https://camlytics.com/help/images/global_settings_rec.png)

![alt text](https://camlytics.com/help/images/global_settings_notif.png)

You can configure email settings for notifications or reports of camera events vie email.
First, enter your email address. Then, in order to use custom SMTP server, enter server address, port and credentials for the custom SMTP server. If you are using Gmail SMTP service make sure Less secure apps sitting is enabled (https://google.com/accounts/answer/6010255).

![alt text](https://camlytics.com/help/images/global_settings_report.png)

In Reports you can configure daily aggregated email reports for events for all channels. Please make sure that reports are also enabled in each desired channel.

![alt text](https://camlytics.com/help/images/global_settings_logg.png)

Logging options are made mainly for diagnostics purposes.
Playback logging can be turned on if you experience problems with you IP or web camera playback or recording (not connecting, bad quality, wrong bitrates, etc.).
Analytics logging records video analysis log. It is encoded and is for reporting purposes only .
All logs will be located in %appdata%\Camlytics\Logs folder.

![alt text](https://camlytics.com/help/images/global_settings_secur.png)

If you want to prevent other users from altering any of Camlytics settings, you can set the password that will be required on any change in the cofiguration.
Here is the list of actions that would require password:

- Global/Channel settings save
- Channel remove/add/change
- Camera map remove/add/change
- Heatmap plan remove/add/change
- Remove events in archive
- Application update
- Application close
