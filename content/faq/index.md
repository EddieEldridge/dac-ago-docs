---
title: "F.A.Q"
---

#### Game can't start, issues with anti-virus
The Engine Overhaul often gets detected as a Trojan by windows defender or anti-virus, to be able to play with it enabled you need to make an exclusion to the mod folder
The reason it gets detected is because it works by modifying the memory of another program when you run it (Medieval 2), which is similar to what some malicious programs would do to other programs you don't want it to happen to.

This is the cause of the error message that tells you it cant find m2tweop.exe when trying to start the mod. (anti-virus deleted it)

for Windows Defender the instructions are here
- Go to Start > Settings > Update & Security > Windows Security > Virus & threat protection.
- Under Virus & threat protection settings, select Manage settings, and then under Exclusions, select Add or remove exclusions.
- Select Add an exclusion, and then select the mod folder.
- If m2tweop.exe got deleted then download the engine overhaul only from download-mod  and paste it into the mod folder to get the exe back. You can also just get the exe from the zipped ago download and extract it into your mod folder. You might have to turn off Windows Defender when trying to copy the exe into the modfolder.

If another anti-virus is blocking it you will have to go into it's settings and find a way to add an exclusion

* Other issues with game not being able to start are
  - not having applied LAA (read LAA.txt) 
  - for steam version make sure you are logged in to steam. 
  - Having a space in your mod folder name is known to cause the mod to crash, make sure you use underscores instead. 
  - Using reshade with EOP causes crash on startup.
  - If nothing seems to work and you crash at startup using both dac.bat and dac_no_eop.bat redownload and reinstall the mod.
  - Shattered Alliances works but is outdated and not really supported, try at your own risk. If you seek support mention you were playing Shattered Alliances.

#### Game crashes with a "Pure virtual function call" message:
This is a rare medieval 2 bug that can happen if a faction gets destroyed. There is no fix other then making sure the faction doesn't die and trying at a later point.

#### Game freezes with windows loading icon
It is likely a faction is going horde (Khazad-dum or Ar-Adunaim). You have to wait it out, don't click on anything to make it stop responding, be warned it can take up to 10 minutes or more for some people for a faction to go horde. 
EOP doesn't crash the game but doesn't do anything either
Run m2tweop.exe as admin. Take note that the bodyguard replenishing limit unlock does not work on the disk version.

#### d3dx9_43.dll and XINPUT1_3.dll were not found
Install Directx from this link: https://drive.google.com/file/d/1Do4Uu5j_7xX5Jw8IqNuSjMMnnATPsDTa/view?usp=sharing

####  Vanilla starts when trying to start the mod:
Open TATW.cfg and change the path after mod= to point to what you called your mod folder, also make sure your steam launch options are empty!

#### Resolution issues
If your game is not running in the right resolution then check the settings for resolution in TATW.cfg and startup.youneouycfg, you can edit both with notepad, having your taskbar at the top of the screen bugs out borderless window.

####  Pirated copies of Medieval 2
The mod is known to cause issues with pirated copies of Medieval 2 and is likely to crash, do not ask for support if you have a pirated copy as I do not know or particularly care why it doesn't work. 
I have no idea how to fix it so you would just waste my time.

Mod used to work but suddenly starts crashing at startup or loading any saves/battles:
Reinstall the engine overhaul from the link in download-mod, just unpack the files to your mod folder and overwrite.

I just installed and when I try to start a campaign it throws me back to menu:
Make sure you have ran full cleaner.bat in your mod folder. If that doesn't work and you haven't installed **any** other submods or modified your files manually delete all the .bin files in data/text and map.rwm in data/world/maps/base.

####  Other crashes:
Ask for support in questions-support and it would be helpful if you provide the log files for every crash you encounter, you can find the logs in medieval II total war/logs. Be aware that having under 4GB of RAM is not enough to run this mod. If you have 6GB or less and you crash as soon as you try to start a campaign try switching to old strat map textures, file is pinned in general. If you have a save which crashes consistently at a certain point upload the save. Make sure to mention if you use submods and contact the submod creators first. 
