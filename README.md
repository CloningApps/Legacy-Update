Since Windows XP was discontinued in 2014, followed by Windows 7 in 2020, Microsoft’s support for their earlier OSes has significantly dwindled. As XP and earlier don’t officially support modern security improvements, such as the SHA256 hash algorithm required by modern SSL and Authenticode certificates as of 2019, much of the internet has become inaccessible to these devices. Adding insult to injury, Microsoft actively removed many downloads for XP and earlier versions in 2020. In effect, working with these OSes is now incredibly difficult.

# Download

Download the latest version from the Releases page of this repo, or from legacyupdate.net.

You can also download the latest nightly build, based on the current development work. Nightly builds are not guaranteed to be stable, and unlike release builds, require at least Windows 2000 SP4 or Windows XP SP2. You may also need to accept extra SmartScreen and other security warnings since these executables are unique to each build. If you’re not sure what to download, you probably want the stable release.

# The ActiveX Control

This repo hosts an ActiveX control used as a replica of the original one developed by Microsoft for the official Windows Update website. The original version of Legacy Update required using a proxy autoconfiguration file (.pac) and some additional configuration of IE security settings to intercept requests to the update.microsoft.com site, because the Microsoft Wuweb.dll control validates that it is being used on the official update.microsoft.com domain. With the custom Legacy Update ActiveX control, proxying is no longer required, because we have full control over the validation logic. This also allows adding additional convenient features not possible with JavaScript alone.

# Building

The project can be built on Windows 10/11 with WSL 2 installed. You’ll ideally want to also set up an XP VM for testing.

You will need to install:

Visual Studio - select the following individual components:
Desktop development with C++
C++ Windows XP Support for VS 2017 (v141) tools
C++ ATL for v141 build tools (x86 & x64)
C++/CLI support for v141 build tools (14.16)
Visual Studio 2008 for compiling a build that works on XP RTM and 2000 SP4 - not required if you only want to build for XP SP2 and later
NSIS

In the WSL environment, run the following command to install build dependencies. This command is for Ubuntu - if you use a different distro, you will need to find and install the equivalent packages from your package manager.

``sudo apt install make nsis nsis-pluginapi mingw-w64-i686-dev``

When opening the solution for the first time, Visual Studio will ask if you want to retarget it against the latest Windows SDK. Select No Upgrade.

# Testing

For debugging, if running on XP with IE8, install Utilu IE Collection. IE6/IE7 is much more useful for debugging the native code, because of its simplistic single-process model. Visual Studio is able to launch it and directly attach to the process the code is running in.

To configure the debugger:

Right click LegacyUpdate in the Solution Explorer → Properties
In the Debugging tab, set the Command field to:
For system IE install: $(ProgramW6432)\Internet Explorer\iexplore.exe
For Utilu IE6 RTM: $(ProgramW6432)\Utilu IE Collection\IE600\iexplore.exe
For Utilu IE6 SP2: $(ProgramW6432)\Utilu IE Collection\IE600XPSP2\iexplore.exe
For Utilu IE7: $(ProgramW6432)\Utilu IE Collection\IE700\iexplore.exe
Set the Command Arguments field to http://legacyupdate.net/windowsupdate/v6/, or any other URL you want to use for debugging
If running on XP, in the Debugger tab, set Register Output to Yes. If running on Vista or later, this will throw a permission denied error due to UAC. You’ll need to manually register the control using regsvr32 LegacyUpdate.dll in an administrator command prompt.

# Website source code

I haven’t yet open sourced the website. This is because the vast majority of it is Microsoft code - just with a handful of patches I’ve made to remove Microsoft trademark branding, switch it to the Legacy Update ActiveX control, and make some slight bug fixes/improvements. It doesn’t feel appropriate to put an open source license on something I don’t own. However, if you would like to review it, you can right click → View Source on the website and take a poke around, mainly in the JavaScript files. You might find DebugBar and CompanionJS (requires Visual Studio or standalone Microsoft Script Debugger) useful.

I’ve tinkered with writing a ground-up replacement of the Microsoft-developed Windows Update website, which I’ll open source when I feel it’s ready for public use (there are currently a number of bugs and missing features).

# Disclaimer

The existence of this project shouldn’t be taken as an endorsement to continue using unsupported OSes. You should stick to a supported OS such as Windows 10 or 11 (or, try Linux?!). However, this service exists anyway in recognition that using these OSes is sometimes necessary to run legacy hardware/software, or just interesting to play around with.

This project is not affiliated with or endorsed by Microsoft. This software is provided “as is”, without warranty of any kind. We don’t believe anything should go wrong, but please ensure you have backups of any important data anyway.

# License

Licensed under the Apache License, version 2.0. Refer to LICENSE.md.

The repository includes a compiled copy of my fork of NSxfer, licensed under the zlib/libpng license.
