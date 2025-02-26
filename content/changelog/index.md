---
title: "Changelog"
description: "A list of all changes made to AGO V3"
---

## Summary

**For a full list of current features, see the [features page](../features/).**

--------------------------------

**Medik - 24/02/2025**
- Update some starting generals
- Updated modders suck message to help them suck less
- Divide "Dalian" culture trait into Bardings and men of Laketown
- Added some trait based bodyguards to the bodyguard switch for Dorwinion, EL, Erebor Gondor, Anduin, Bree, High Elves and Rhun
- Rhun now get a custom Dragonswrath general for completing the Dragon Relic quest

**Medik - 24/02/2025**

- Reduce hitpoint trait bloat and made most ancillaries that aren't character specific transferrable enabling more control over who exactly should have more hitpoints and it not just generally being maxed on most characters

**Medik - 23/02/2025**

- Moved all difficulty settings options into Welcome Screen
- Made all landmark buildings hinterland
- Added default battle speed option
- Added AI active raiding notification

**Medik - 19/02/2025**

- Ensured all EOP units have correct selection voicelines (they previously had none)
- Added custom battlemap selection lines for Faramir, Boromir, Legolas, Gothmog, Aragorn, Saruman and Thranduil
- Localized general hitpoint values in half scroll details tab
- Add Sharku custom general for taking Foldburg and Gineard
- Add Berethor custom general for taking East and West Osgiliath

**Siu - 19/02/2025**

- Added Variag Veterans

**Medik - 18/02/2025**

- Added more Harad building text by Skywalker!
- Move cinematic intros to Lua
- Bree no longer has to be allied to ND to rebuild the Bridge of Tharbad
- Bree can no longer recruit Tharbad Royal Guard unless they are allied to ND

**Siu - 17/02/2025**

- Added Ered Luin strat models
  - Gor, Nar, Grain, Grindfarn, General, Captain

**Medik - 15/02/2025**

- Add new special ability sounds for Boromir, Faramir and the generic Captain ability
- Updated some event pics that Reeveli made (for EL and Aragorn RPG)

**Medik - 13th Feb 2025**

- Added custom Harad swordsmith, port and merchants wharf building text
- Remove any references to the unused Earls and Kings stables
- Rework Gondor T1 Stables to be "Pony Stables" - provides small trade income boost
- Get rid of the disgusting "Sheikh's Stables" for Rhun and Harad

**Medik - 6th Feb 2025**

- Remove Free Upkeep from some more non-miltia units
- Update Garth Helegof garrison 

**Medik - 4th Feb 2025**

- Reduce control area radious of towers
- Adjusted morale threshholds in automatic descriptions

**Siu - 02/02/2025**

- Added Rohan unit cards and info cards

**Medik - 31/01/2025**

- Overhauled guild system
    - Converted all guild triggers from export_descr_guilds.txt to a type safe Lua system in guilds.lua
    - Removed non-sensical triggers for certain guilds and replaced them with more logical triggers
    - Added a tab in the "Half-Scroll" GUI for displaying available guilds, your current level with them and how you acquire points them (relative for each settlement)
    - Added three new guilds
      - Pipe-Weed Farms
        - Available for Bree, Gondor, Dol Amroth
        - 2 tiers, allows for better trade income and farmhand pikemen at the 2nd tier
      - Corsair Haven
        - Available for Gondor, Dol Amroth, Harad, Ar-Adunaim, Mordor
        - 2 tiers, allows for corsair unit recruitment at first tier and black ship recruitment at 2nd tier (incurs public order malus)
        - Available only in coastal regions in southern Middle-earth
      - Thieves Guild
        - Available for Gondor, Dol Amroth and Northmen
        - 3 tiers, allows for spy recruitment and ruffian recruitment
- Added a new "Pipe-weed" trait line related to the smoking of Pipeweed and a bunch of triggers like higher chances to acquire the trait line in Bree/Longbottom and if you have local Pipe-weed farms
- Available for Dwarves, Gondorians and Northmen only
- Gave the Pipe-weed smoker trait to a bunch of generals like Bilbo, Gandalf, Saruman, Aragorn, Barliman etc. 
- Added the tw-script VSCode Medieval 2 syntax extension to the Tools folder (Right click -> Install VSIX to install)

**Medik - 23/01/2025**

- Fix Annon En Orod allowed siege equipment
- Add cfg option to disable Skirmish mode by default for player's armies (Enabled by default)
- Add Black Uruk Captain's bodyguard
  - Thank you Bruder!
- Kill garrison units when faction mergers happen
- Added biographies and unit descriptions for the 4 Ered Luin custom bodyguards and starting generals
- Move capital change cost to Lua
- Added Khazad Dum/Moria name swapped based on faction

**Medik - 19/01/2025**

- Added 42 new music tracks for a variety of factions
- If Gandalf dies there is now a 20% chance each turn he is he dead that he will respawn as Gandalf the White rather than it being guaranteed (10 turn wait still applies)
- Added a new script for Dale where there is a 3% chance each turn you hear a rumour about the discovery of the Master's lost gold from a drunkard in a tavern in Dale. It's then spawns a random rebel army on a tile in a region surrounding Dale and if you go and defeat them you can reclaim them the gold.
- Changed Aragorn's special ability to permanently reduce fatigure by a small amount (2 uses)
- Adjust Boromir and Faramir special abilities and add their missing traits
- Give Ents their missing hero ability

**Medik - 17/01/2025**

- Updated some Gondor unit descriptions to remove AI text and include their proper recruit regions
- Removed secondary weapon from some pikes
- Fixed Nazgul, Maia, Sauron etc. getting marriage offers
- Update portraits for all Harad custom generals spawned via script
- Updated some Middle-eastern UI elements 
- Added the ability for Harad to recruit assassins once the Hasharri have joined
  - Costs 7 turns to recruit
  - Costs 3000 gold to recruit
  - One time use (and then recruitment is available again)
  - Requires Hasharrii clan to be incorporated
  - Disabled for AI
  - Disabled assassins sabotage
  - Made assassin success chance 100%
- Updated Ered Luin script event pics (Thank you Reeveli!)

**Siu - 14/01/2025**

- Added Ered Luin dwarves new models
- Added unit description for Rhun BG, Heir and Dragonswrath units

**Medik - 13/01/2025**

- Added Greenwood Rangers description (Thank you Redstar!)
- New unit cards for ND, Erebor and Mirkwood
- Added new unit "Goblin Ballista", a more accurate and more powerful version of the "Snaga Ballista" 

**Medik - 12/01/2025**

- Added "Scoured Longbottonm" cas model
- Updated Shire Scouring event pics to be in line with the rest of the event pics
- Updated Bill Ferny portrait pic
- Add new evil spy model
- Added new strat models for Dol Goldur generals and captains

**Medik - 10/01/2025**

- Added new 7 tiered trait line for all generals that keeps track of their personal kills
- Show general kills in Details tab in Half Scroll
- Add ability to rename characters

**Medik - 06/01/2025**

- Updated credits (markdown and in-game) with all the latest information

**Medik - 06/01/2025**

- Added Lossoth Icewalkers unit model
- Added Lossoth Icewalkers strategy map model
- Added Lossoth Trait
- Added "Great Tent of Kassuq" custom building
- Renamed Fuirost to Kassuq and moved it North
- Removed Drudeain from Forodwaith/Angmar

**Medik - 04/01/2025**

- Add Lerynian's new Eored Swordsman model
- Update Forsaken Inn script to require at least 3 units on the tile to prevent army spawns

**Medik - 03/01/2025**

- Added 8 new custom landmark buildings in Harondor 
  - Thank you Skywalker!
- Added custom building names and text for Harad's core buildings
  - Thank you Skywalker!

**Medik - 01/01/2025**

- Added "Death Throes" animation pack
- Added new unit "Trappersmen" by Fynn. Replaces Woodland Hunters.

**Medik - 31/12/2024**

- Added 4 new weather types for Mordor
  - Includes 4 custom skyboxes and custom lighting
- Updated skydome mesh
- Added new texture for Barad-Dur eye
- Updated some battlemap UI stuff

**Medik - 30/12/2024**

- Fixed Angmar script
- Add keybind `CTRL+SHIFT+T` to teleport the last selected character to the hovered coordinates
- Add Druedain rebel subfaction
- Replaced Captain Geh with Ghân-buri-Ghân, may he forever rest in peace
- Add custom Harondor Mercs and Corsair strat models
- Add back Corsair Raiders and Corsair archers and setup them in merc pools
- Add and setup a custom Corsair rebel subfaction
- Added corsairs to ports along Gondor/Harondor/Harad coastlines for AA, ME and Orc factions

**Medik - 29/12/2024**

- Dol Amroth, ND and Gondor can build and recruit the Fief units in the respective regions from the Barracks
- ND can recruit Gondor mainline after RK from their own barracks as usual
- All hidden resources for all the fiefs are setup, now should be very easy to setup any additional fief units as they are self contained within the one building
- Each custom fief bodyguard unit can get free upkeep in their respective fief (i.e Lossarnach Household Guard get free upkeep in Lossarnach with the fief camp but not in Anflas)
- Added Erech as a minor settlement and moved the Blackroot Vale General (Duinhir) there

**Siu - 29/12/2024**

- Updated info cards
  - Erebor, Rangers, Isengard and Gundabad

**Medik - 24/12/2024**

- Make Bree script trigger at turn 44 instead of 69
- Added new script for Angmar
    - Conquer historic Arnorian settlements to recieve reinforcements from Sauron in the form of custom generals and units

**Siu - 03/12/4**

- Added new orc archers model
- Added info cards and unit cards

**Medik - 25/11/2024**

- Added inheritable Dorwinion race traits in Lua
- Abstracted trade resource value tooltips

**Siu - 24/11/2024**

- Added unique BG
  - Arulad Dragon Lords, Balchoth Bladesmen
- Added info cards

**Medik - 24/11/2024**

- Removed inheritable Maia race

**Fynn - 23/11/2024**

- Local faction check for Arnor/RK setFactionBanner command
- Make sure garrison units can never double spawn

**Fynn - 21/11/2024**

- Fix hero abilities

**Medik - 16/11/2024**

- Added 7 new landmark buildings in Harad
  - Thank you Skywalker for the ideas and building descriptions!
- Updated some Harad unit descriptions
  - Thank you Skywalker
- Added new culture specific "War Declared" event pics for each culture
- Added new unit text for "Morgul Spearguard"

**Siu - 12/11/2024**

- Added unique BG
  - Morgul Enforcers, Morgul Spearguard, Black Uruk Captains
- Change Morgul Chosen to Mace/Shield
- Added unit cards and info cards
- Give Orc Band javs

**Fynn - 11/11/2024**

- Updated changelog to include my commits after 2 years :D

**Fynn - 10/11/2024**

- Alter non lore character ages across the board

**Medik - 10/11/2024**

- Tidied up effects of Hero Abilities to be more focused
  - Thank you SeidrShade!

**Fynn - 09/11/2024**

- Edit a bunch of Main menu UI elements to have a better gold color and no background
- Revert icons looking clothy in campaign select
- Update EOP

**Fynn - 08/11/2024**

- Update EOP
- Refactor spawn army function to use a table as input
- Fix squalor in kind/harsh ruler trait

**Medik - 08/11/2024**

- Changed Avari influence spectrum from 0-200 and updated corresponding events
- Fixed faction leader's cas model not getting set correctly if they had certain traits
- Added more info to Avari influence scroll
- Added passive influence for having Protected Lands built
- Added new Wildmen/Northmen ship model
  - Thank you Gigantus!
- Added new Tol Acharn SFX
- Woodland Realm/Lorien Union name and colour change

**Medik - 06/11/2024**

- Add "Recent events" list to Dunland's Isengard influence tab and a rough breakdown of how you can change influence

**Fynn - 06/11/2024**

- Made improvements to spy network GUI
- Improved map background
- Made the spy network map fill you own regions too

**Fynn - 05/11/2024**

- Update EOP
- Redid strat map faction specific move modifiers
- Made enemy move extents line up with their actual move range
- Fix mount gram battle map
- Remove pre battle save as it was causing too many issues
- Add new snow micro texture on the battle map
- Fix crash exiting campaign
- Transfer Battle AI to LUA

**Medik - 03/11/2024**

- Added blank intro and logo videos
- Renabled "movies" in TATW.cfg
- Restored faction intro movies for Rohan, Isengard, Gondor and High Elves
- Restored a movie for the return of Gandalf the White
- Added a movie/historic event for the Crowning of King Elessar (shocking I know)

**Fynn - 03/11/2024**

- Fix arrow poiting to all factions for deforestation script
- Fix bug with Adunaim pillar script
- Fix exception at max level spy network

**Fynn - 01/11/2024**

- Fix isengard barracks for Dunland
- Update EOP (bug with hidden resource locked units)

**Fynn - 31/10/2024**

- Add back RK units as EOP units
- Set up EDB recruitment for new RK setup

**Fynn - 30/10/2024**

- More RK transistion work

**Medik - 29/10/2024**

- Added a bunch of new UI and banners for EOP scrolls
- Added Skywalker's updated Haradrim unit descriptions and Black Palace building description
- Added new ruined and restored buildings of the White Pillar of Umbar
- Added new ruined and restored cas models of the White Pillar of Umbar
- Added a new script for the Ar-Adunaim where upon rebuilding the White Pillar of Umbar, reinforcements from the South arrive with a randomized army
- Added a new cfg option to give the AI AA a random rebel coastal settlement, in addition to Umbar, at game start
- Add custom battlemap for Faen'obel
  - Thank you very much WK Kauto Ville from the Reforged Team!

**Fynn - 28/10/2024**

- Improve Arnor transition via EOP with text changes, symbols, strat models
- Update EOP to support such full transitions
- Fix Dunland governor trait localization
- Improve RK transition same way

**Fynn - 27/10/2024**

- Update EOP
- Factor out some console calls in lua script
- Add Dunland General by Lerynian
- Fix dunland script data not being persistent
- Alter Dunland's family tree a bit

**Fynn - 26/10/2024**

- Fix some misaligned mesoamerican ui button highlighting
- Nerf raiding a bit

**Fynn - 25/10/2024**

- Improve raid scroll GUI
- Add a close button bottom right to raid scroll

**Fynn - 24/10/2024**

- Various Dunland fixes
- Fix Rohan missing from BMDB
- Add temporary debugging counters to Dunland's isengard influence GUI

**Medik - 24/10/2024**

- Fangorn now gets actually deforested and populated as you progress through Isengard's script

**Medik - 23/10/2024**

- Added new Palantir script via Lua
  - Only available for factions who control a Palantir
  - Reveal specific tiles in a radius
  - 5 turn cooldown
  - If Sauron, Denethor or Sauron are in the settlement, they reveal a wider area

**Fynn - 21/10/2024**

- Fix to dunland governor trait trigger

**Medik - 21/10/2024**

- Added new attack and death animation sounds for Sauron
- Added new Warg death sounds
- Added new Spider attack and death sounds
- Added 4 new Orc War horns
- Added description for Mahtalliva Ciryaráto
  - Thank you SeidrShade!
- Added descriptions for Black Palace units
  - Thank you Skywalker!
- Adjust Dorwinion starting conditions to not be allied with Dale and Erebor
- Adjust Rhun starting conditions to not be at war with Dorwinion

**Fynn - 19/10/2024**

- Finish Dunland script to playabale state
- Link DaenRaider trait to raiding

**Medik - 19/10/2024**

- Add historic events for Dorwinion AI events
  - Thank you Skywalker for the text!
- Use VBS script instead of batch file for faction specific UI
- Adjust Dorwinion player Rhun auto-expansion and start conditions
- Tabbed raid/scroll influence stuff
- Add Uruk-Hai selection sounds and Return Loot/Slaves SFX
- Added a frame cas model around the map
  - Credits to Jared Blando for the original map
- Updated valid/invalid building UI for all factions

**Fynn - 19/10/2024**

- Update EOP (Persistent fort models)

**Medik - 18/10/2024**

- Adjusted base terrain type movement modifier values to be more impactful and meaningful
- Added new terrain type movement modifiers for a variety of factions
  - Dwarves move faster in hills and mountains but slower in forests
  - Dunedain move faster in wilderness
  - Umbar and Dol Amroth move faster on the coast
  - Dunland and Enedwaith move faster on hills
  - Mordor moves faster on hills but slower in forests
- Update Independant Realms faction symbol and fort banner symbol
- Added a new custom portrait for Beorn
- Added new cas model for Radagast
  - Thank you Louis Lux!

**Fynn - 18/10/2024**

- Update EOP (Persistent fort models)

**Medik - 17/10/2024**

- Normalized, adjusted battle map movement modifiers
- Added new battlemap terrain tooltips system
- Refactored Tooltips.lua

**Fynn - 17/10/2024**

- Update EOP

**Medik - 16/10/2024**

- Add new unit descriptions for Arainior Caleryn and Vintner Court-Nobles
  - Thank you SeidrShade and Skywalker respectively!
- Add new Temple-War and Khamuls Shadow unit descriptions
  - Thank you Skywalker!
- Add new unit descriptions for Ahtarva Taminnarda
  - Thank you SeidrShade!

**Fynn - 15/10/2024**

- Fix Isengard spawn of Nazgul

**Medik - 15/10/2024**

- Fixed Saruman default portrait
- Added Saruman of Many Colours portrait
- Added Saruman of Many Colours cas model
- Added new cinematic intro sequence for Mordor
- Added 10 new Orcish War Horns
- Added 2 new Gondorian War Horns

**Fynn - 14/10/2024**

- Update EOP
- Add some limits on crusade/jihad commitment
- Make all building short description fill on game load to avoid non localized text when repairing buildings
- Add extra upkeep tooltips to upgrading spy networks

**Medik - 13/10/2024**

- Updated the Tol Acharn banner symbol
- Fixed RK/ND color/faction/symbol setting
- Display localized names on raid scrolls
- Fixed Nazgul respawning with the wrong bodyguard
- Add new battle and strat models for Gandalf, Saruman and Legolas - Thank you Louis Lux!

**Fynn - 12/10/2024**

- Added new generated sprites - Thanks Potato!
- Add some extra script for modding tool
- Update EOP with generate single sprite feature

**Fynn - 10/10/2024**

- Update EOP

**Fynn - 09/10/2024**

- Update EOP to fix building loading issue

**Fynn - 08/10/2024**

- Made sure avari generals don't lose their names when changing factions
- Update EOP

**Fynn - 07/10/2024**

- Various fixes and v4 upgrades for generic helpers

**Medik - 07/10/2024**

- Adjust Vintner Estate construction time

**Fynn - 06/10/2024**

- Update EOP
- Set isPlayingDLC true by default to fix trade routes

**Fynn - 04/10/2024**

- Continue Dunland script in LUA
- Fix dynamic replenishment script

**Siu - 04/10/2024**

- Added unique BG to
  - Harad Starting Generals
- Added unit cards and info cards

**Fynn - 04/10/2024**

- Update EOP
- Fixes to pre battle save

**Medik - 02/10/2024**

- Add Dorwinion overhaul

## Dorwinion Overhaul

- A complete overhaul of the entire Dorwinion roster
  - The roster is now made up for four distinct groups, the Rouadengi, Leofthiuda, Kugathi and Avari
- Custom voice acting for all units on both the strategy and battle map and the previously unused "Eastern European" accent to fill in the gaps. Different voice lines are used on the stratmap depending on if the character is of Rouadengi, Leofthiuda or Kugathi descent
- 20+ new custom ancillaries and traits
- Custom UI and banners
- 10+ new custom strategy models, also dependant on whether the character is of Rouadengi, Leofthiuda or Kugathi descent
- 5 brand new scripts and mechanics
- 3 new Dragonswrath units and a new building line for Rhûn
- Campaign map area of Dorwinion has been completely reworked to facilitate the new scripts
- Dorwinion no longer starts with the Isle of Neburkah
- Dorwinion now has a custom name pool

**_Encircle the Sea of Rhun_**
Once you have completely encircled the sea of Rhun, the Council begins to look farther afield for new oppurtunities. Establish trade outposts or "kantors" in capital cities of foreign nations you have trade rights with to enable them to recruit some of your units and the ability to recruit some of their units. This special building also gives both of you a trade boost and gold boost.

**_Regentsmen Reforms_**
Dorwinion is a fledgling nation and it's military is in it's infancy. In order to truly compete with the other great powers in Middle-earth, it will need to modernize and reform it's military. In order to do this, you must construct both Military and Naval Academies across your lands. You will then be able to enact the "Regentsmen Reforms" as well as specializing in a specific domain (Infantry, Ranged, Cavalry or Naval) with special bonuses to each.

**_Sauron's Proposition_**
Sauron is not a fool. If you somehow manage to organize your military correctly and bring the people of Rhûn to their knees, Sauron will make you an offer. Cease war with the people of Rhûn and join him. You may decline and receive aid from your Western allies, agree to his terms but refuse a formal alliance or accept his inevitable domination and join forces with him. Each choice will fundamentally change how the campaign will play out.

**_The Rhûnnic Question_**
If you happen to reject Sauron's proposition and completely destroy Rhûn, you will be forced to make a choice. The "Dragon Cult" of Rhûn has infested every corner of Rhûnnic society and important decisions regarding it's future must be made. You may choose to attempt to integrate it or decide to completely outlaw it. The former will enable you to construct temples to this animalistic worship and recruit Dragonswrath units at the cost of your own cultural growth and stability at home. The latter will see the remaining people of Rhûn rise up against your rule however you will be given powerful tools to put them down for good.

**_The Avari_**
Scattered throughout Dorwinion's forests and mountains, the Avari live. They are a wild breed, less sophisticated than their kinfolk that heeded the Valar, and they are jealous guardians of their hidden places. They are not interested in becoming part of any realm, nor will they be subjects of any lord not of their own. They keep their own counsel in all things. Despite this, they are still "Dorwinion" as much as the Rouadengi or Kugathi and they cannot simply be ignored. They can be an asset to Dorwinion's goals - but a balanced one they must be. As Vintner-Regent, you must carefully manage your relationship with the Avari. This relationship can be affected in a variety of ways from utilizing the ones eager to fight in war to encroaching on their ancestral homes. Find the right balance and perhaps there is a greater relationship that can be born but fail to understand them and you risk all out war and the threat of more than just Rhunnic army on our borders.

- Bump version to AGO-3.1.0-BETA

**Medik - 02/10/2024**

- Remove all EOP units getting free upkeep
- Gave WR a custom selection color
- Added some vanilla custom battlemaps as custom tiles

**Medik - 01/10/2024**

- Moved all custom tiles to Lua

**Siu - 01/10/2024**

- Added unique BG to
  - Mordor Nazgul
- Added unit cards and info cards

**Fynn - 30/09/2024**

- Update EOP

**Medik - 30/09/2024**

- Gave KD a custom selection color

**Siu - 28/09/2024**

- Added unique BG to
  - Dornornoston
- Added new Unit Models and Textures
  - Khamul's Shadow Riders
  - Gwaith i- Mirdain
- Added unit cards and info cards

**Siu - 23/09/2024**

- Added unique BG to
  - Thranduil, Cirdan, Lagoren, Aglarakhor
- Added unit cards and info cards

**Fynn - 22/09/2024**

- Add fixed Fornost
- Add proper mine built detection to raiding

**Fynn - 21/09/2024**

- Update EOP

**Medik - 21/09/2024**

- Added unique building for Brown Boat

**Fynn - 19/09/2024**

- Add some standard lua scripts for the modding tool

**Fynn - 18/09/2024**

- Update EOP

**Medik - 17/09/2024**

- Fix Gorathul placement
- Added custom army selection color for Moria
- Fixed Dome of the Stars placement
- Add Control DA event pic and updated event text
- Slightly adjust command star colors to be less dull
- Add new banner symbols for Erebor, Ered Luin, Angmar, Khand, Goblins of Moria, Isengard and Enedwaith

**Medik - 07/09/2024**

- Added Cave Troll Drummers for Moria
  - Credits to Reforged, specifically CrimsonBehelit!
- Added Gondor T2 castle with better pathfinding and collision
  - Credits to Wenceslaus
- Remove annoying as fuck eagle sound from Mountain climates
- Bump version to AGO-3.0.2-BETA-HOTFIX-1

**Medik - 06/09/2024**

- Added custom strat model for Gorathul and moved it slightly to the left
- Move Moria/KD logic for Moria player to Lua
- Add back old Eowyn strat model

**Fynn - 05/09/2024**

- Update EOP
- Made non islamic/catholic characters move towards crusade targets via LUA

**Fynn - 31/08/2024**

- Fixed Ushgol still in Isengard family tree

**Medik - 31/08/2024**

- Add Louis Lux's new Eowyn strat model, battle model and portrait
- Gave Angmar a modified version of the Mordor UI
- Add new region "Gorathûl" for the Goblins of the Misty Mountains
  - Added new mountain pass that connects it to KD
  - Uses Zagh Khala's CAS and battlemap but starts as a small castle to allow players to build it up

**Medik - 30/08/2024**

- Bree AI now gets a random commander generated from the options
- Added custom selection sounds depending on the Bree characters race
- Updated randomTableElement() to support tables with non-integer index keys
- Fix Elven UI wrong colors on notifications
- Removed Isengard and Dol Goldur characters in Forodwaith
- Add Spy Network event art
- Prevent characters from dieing of old age on turn 1
- Add Goldo's new Goblin Bodyguard

**Fynn - 29/08/2024**

- Made persistent tables A E S T H E T I C
- Some cleanup/fixes to historic events script

**Siu - 27/08/2024**

- Add info cards
  - merc
- Add unit cards
  - merc

**Medik - 26/08/2024**

- Fix Rohan diplomacy strings
- Fix rendering of Welcome Screen at other resolutions
- Added detailed explanation of Spy Network mechanic
- Bump version to AGO-3.0.2-BETA-HOTFIX-1

**Medik - 25/08/2024**

- Add Axethrower fix to Full Cleaner
- Added DaC/TATW models_missile

**Siu - 22/08/2024**

- Add info cards
  - merc(hre, russia)

**Medik - 20/08/2024**

- Raiding an Arnorian ruin now causes a rebel army to attack (80% chance)
- Added new strategy map voice lines for the following characters
  - Sauron
  - Aragorn
  - Saruman
  - Lurtz
  - Gothmog
  - Gandalf
  - Rangers
  - Hobbits
  - Boromir
  - Faramir
  - Gimli
  - Dain
  - Elrond
  - Thranduil
  - Legolas
  - Glorfindel

**Medik - 19/08/2024**

- Change capital change cost to 10,000 to prevent cheesing

**Medik - 14/08/2024**

- Added Welcome Screen
  - Includes the following sections
  - Welcome Page/Message
  - Settings pages
  - Scripts page for explaining scripts
  - Historical Events page for showing a list of historical events that occured in the game
  - Changelog page showing all the new changes to the mod
  - Credits page showing all the credits and acknowledgements for the mod
- Moved "config" to AGO.cfg
  - AGO.cfg contains the default cfg for all campaigns
  - This is read into the save file and is configurable via the Welcome Screen settings page where settings are per save file
- Added complete toggleablity of "Hide Info" in-game, including support for adding back the question marks

**Medik - 14/08/2024**

- Added Natural disasters script

## Natural Disasters

### Earthquake

- Functions like vanilla earthquake

### Storm

- Functions like vanilla storm

### Flood

- Functions like vanilla flood

### Fire

- Occurs only during the Summer months
- Destroys forest tiles around a small area, permanently converting them to Wilderness files

### Sandstorm

- Occurs only in Southern regions
- Prevents armies from moving for one turn

### Snowstorm

- Occurs only in Northern regions and in Winter
- Prevents armies from moving for one turn

### Tidal Wave

- Occurs only in coastal regions/settlements
- Large chance to destroy buildings and settlements in the effected regions
- Kills large amount of local population

### Locusts

- Occurs only in very Southern regions
- Heavily damages all farm buildings in the region

### Famine

- Occurs only when a settlement has no governor or the governor has poor governing traits
- Kills a random percentage of the population due to hunger

- Added new fitting ImGUI scroll backgrounds for most factions and added functionality to select the right one in GUI.lua
- Added new text and banner images for vanilla disasters
- Added historic event sounds to ImGUI scrolls
- Added new event pics for character_dies and character_dies_disaster

**Medik - 14/08/2024**

- Added Natural disasters script

## Natural Disasters

### Earthquake

- Functions like vanilla earthquake

### Storm

- Functions like vanilla storm

### Flood

- Functions like vanilla flood

### Fire

- Occurs only during the Summer months
- Destroys forest tiles around a small area, permanently converting them to Wilderness files

### Sandstorm

- Occurs only in Southern regions
- Prevents armies from moving for one turn

### Snowstorm

- Occurs only in Northern regions and in Winter
- Prevents armies from moving for one turn

### Tidal Wave

- Occurs only in coastal regions/settlements
- Large chance to destroy buildings and settlements in the effected regions
- Kills large amount of local population

### Locusts

- Occurs only in very Southern regions
- Heavily damages all farm buildings in the region

### Famine

- Occurs only when a settlement has no governor or the governor has poor governing traits
- Kills a random percentage of the population due to hunger

- Added new fitting ImGUI scroll backgrounds for most factions and added functionality to select the right one in GUI.lua
- Added new text and banner images for vanilla disasters
- Added historic event sounds to ImGUI scrolls
- Added new event pics for character_dies and character_dies_disaster

**Medik - 10/08/2024**

- Added new unit "Thieves of Tharbad"
  - AOR and Mercanary unit in Tharbad

**Fynn - 07/08/2024**

- Some small fixes to Nazgul script

**Fynn - 02/08/2024**

- Update EOP

**Medik - 02/08/2024**

- Add optimized loading screens - Thanks Cryohelenic!
- Changed Settlement Info text from Khaki to Black and bolded the keys

**Siu - 30/07/2024**

- Add unit cards
  - merc
- Add info cards
  - merc

**Fynn - 29/07/2024**

- Update EOP

**Fynn - 28/07/2024**

- Some slight changes to economy balance
- Nerfed the AIBoost trait a lot

**Medik - 28/07/2024**

- Added new custom settlements for Town, Large Town, City and Large City for Rhun and Khand
- Added new custom settlements for Town, Large Town, City and Large City for Harad
- Updated vanilla Middle Eastern ambient building textures for rare cases where they weren't replaced properly by the new techtree buildings
  - Thank you Arivostus for the models!

**Fynn - 25/07/2024**

- Fix some bugs in Bree script
- Fix Dome of Stars being placed at the wrong location

**Fynn - 24/07/2024**

- Update EOP
- Changed some campaign_db xml stuff relating to auto resolve

**Siu - 23/07/2024**

- Add GAW Info Cards
  - sicily
- Add Barded Horse to Green Hill Riders
- Change Region Tarnost "Lamedon" to "Belfalas Uplands"
- Change Region Calembel "Morthand Vale" to "Lamedon"
- Change Region Celoniach "Celoniach" to "Faerdor Lands"

**Fynn - 23/07/2024**

- Finish transferring a lot of trait and ancillary triggers to LUA
- Made Nazgul spawn further apart so theyre less likely to bunch up

**Fynn - 22/07/2024**

- Various EOP updates
- Start converting bunch of trait triggers to LUA to eliminate use of annoying IsRegionOneOf

**Fynn - 21/07/2024**

- Fix broken hero abilities due to Mav
- Bunch of eop updates
- Make crusades/jihads bit less common

**Medik - 21/07/2024**

- Add custom strat model for Faenobel

**Fynn - 20/07/2024**

- Fix how EOP changes settlement strat models
- Some fixes to Nazgul script

**Fynn - 19/07/2024**

- Bunch of EOP updates including fixing crashing with units that only consist of officers and add ability to fire disasters

**Medik - 19/07/2024**

- Add Cleansed Isengard csm
  - Requires Elves, Dunedain, Kings Men or Northmen culture (>75%)
- Minas Tirith CSM now has black walls as described in the books

**Fynn - 18/07/2024**

- EOP updates
- Add strat character model persistency via EOP

**Medik - 18/07/2024**

- Add custom UI batch files for all factions
  - If you intend to do UI work, do it only in the `eopData/eopScripts/Batch_Files` folder
- Added new Tol Acharn symbol in unit list to replace the old Muslim symbol
- Added Pythax's Mordor UI and Gondor UI - Thanks Pythax!
- Added Pythax's Northern UI - Thanks Pythax!

**Fynn - 17/07/2024**

- Fix cross campaign persistency/data reloading
- Add Dol Amroth and Pelargir cas models by Maverick
- Add some extra features to spy networks like revealing armies and strength/economy information

**Fynn - 17/07/2024**

- Fix some settlement names

**Medik - 17/07/2024**

- Fix a bunch of GaW stuff
- Update trade pips
- Add Fog Lurker's Isengard portraits

**Medik - 16/07/2024**

- Added updated Tol Acharn event strings for each culture
- Add Lua profiler

**Maverick - 15/07/2024**
_New Bodyguard Units_

- Steward guard
- Boromir's Company (Boromir's BG)
- White Company (Faramir's BG)
- Captain's Rangers (Ithilien fiefdom BG)
- Ringlo Vale Guards (Ringlo fiefdom BG)
- Lossarnach Household Guard (Lossarnach fiefdom BG)
- Riders of the Green hills (Pinnath Gelin fiefdom BG)

_Recruitable Units_

- Anfalas Slingers - (Replaced Anfalas Pikemen)
- Dol Amroth Men at Arms
- Ringlo vale pikemen
- Pinnnath Gelin Footmen

_Buildings_

- Dome of stars - Ruined and rebuilt added in West Osgiliath (UI by Kvintus)
- Court of Isildur - Ruined and rebuilt added in East Osgiliath (UI by Kvintus)

- Added the various units to their appropriate regions and buildings
- Added 32 new ancillaries
- Two new special abilities for Boromir and Faramir

_Credits_

- I dont remember who made what 100% anymore in terms of models, but 80% is Coma and Lerynian with texture edits by myself
- Pythax and PiejaDak UI work
- Coma made the Men at Arms and new Swan knight model and unit cards
- John_M made the Fountain Guard
- Lerynian made the Pinnath Gelin footmen and cavalry, Anfalas Slingers, Lossarnach Axemen and Ringlo Pikemen
- Maverick, Bill and Reaper for some other models
- John Anthony for some ancillaries

**Medik - 15/07/2024**

- Fixed flickering formation outlines when holding spacebar - Thanks Karl!

**Medik - 15/07/2024**

- Update siege weapon unit cards - Thank you WK!

**Fynn - 15/07/2024**

- Add new battlemap for Tharbad, thanks to WK!
- Improve spy networks system

**Fynn - 14/07/2024**

- Some ring script fixes
- Update EOP
- Improve image loading/unloading
- Add DEV_DEBUG bool

**Fynn - 13/07/2024**

- Some ring script fixes
- Reorganize all unit and unit info cards
- Add script to dynamically change fortification levels for custom settlements
- Add dynamic AI unit value adjustments for undervalued units

**Medik - 13/07/2024**

- Tidy up Wildmen UI
- Add custom UI for Northern Dunedain - Thanks Pythax!
- Add some basic RK/ND stuff to Lua

**Medik - 13/07/2024**

- Add AA Subjugation event at game start - Thanks Siu!
- Update AA faction info with subjugation units

**Fynn - 12/07/2024**

- Fix to character with ring spotting in ring script

**Medik - 12/07/2024**

- Added WK's new Mumakil models, animations and textures - Thanks WK!
- Added new Jihad and Crusade event pics
- Rebuilt descr_skeleton using IWTE. Everything you need is now self-contained in the folder and you don't need to unpack or move anything around!

**Fynn - 11/07/2024**

- EOP AI updates
- Add new religion for Gundabad
- various bugfixes

**Fynn - 11/07/2024**

- Updated bmdb with entries for every faction to eliminate silver surfers
- Added Jihad and Crusade mechanics to Ring script

**Fynn - 10/07/2024**

- First playable versions of new Ring script

**Fynn - 09/07/2024**

- Add the spy networks map feature

**Fynn - 08/07/2024**

- Renamed all region/settlement internal names to make sense
- Remove non-existant guilds from trigger

**Siu - 08/07/2024**

- Added Moria strat Model
  - Captain
- Added Harad strat Model
  - General, Leader, Khuzaymah
- Unit Cards Fix
  - aztecs, france, russia
- Unit info Cards
  - byzantium, turks

**Medik - 07/07/2024**

- Fixed flickering formation outlines when holding spacebar - Thanks Karl!

**Medik - 07/07/2024**

- Update siege weapon unit cards - Thank you WK!

**Fynn - 07/07/2024**

- Add new Hirwaith symbols from Bill
- Continue ring script
- Add new feature to hide army information on strat map

**Fynn - 06/07/2024**

- More ring script work
- Update EOP
- Fix some crashes
- Fix Sauron spawning with 3 models
- Fix Nazgul respawning constantly

**Fynn - 05/07/2024**

- Continue ring script work
- Update EOP

**Fynn - 04/07/2024**

- Reworked rebel factions
  - Gave them all new coloured banners and symbols
  - Reworked their starting armies

**Fynn - 03/07/2024**

- Added banner symbols and character model persistency to EOP

**Fynn - 02/07/2024**

- Update EOP and refactor some LUA code to use improved EOP features

**Fynn - 01/07/2024**

- Update EOP

**Fynn - 30/06/2024**

- Update EOP with new custom AI

**Fynn - 21/06/2024**

- Update EOP

**Medik - 26/06/2024**

- Updated EOP to [0458551](https://github.com/youneuoy/M2TWEOP-library/commit/0458551a6954ee2bbede9ae847aff4a70ece2663)
- Added custom Player/Enemy Movement Range color outlines based on faction color
- Gave Dwarven culture a few more bodyguard options in Bree Commander script

**Medik - 23/06/2024**

- Removed Neburkah from Dorwinion start

**Medik - 20/06/2024**

- Moved all 3rd party Lua libs to `3rd` folder, leaving custom helpers in `Helpers`
- Update settings.json for people who load the mod folder in it's entiriety
- Enforced camelCase filenaming for Lua files

**Siu - 20/06/2024**

- Added Moria unit cards
  - All Units

**Fynn - 19/06/2024**

- Updated EOP to v4
- Refactored LUA codebase to EOP v4

**Siu - 18/06/2024**

- Added Moria Model, unit info cards
  - All Snaga Units, All Mid Goblin Units, All Black Pit Units

**Siu - 07/06/2024**

- Added Moria Model, unit cards, unit info cards
  - Uruk Overseers, Azogs Defiler, Mountain Uruks

**Medik - 05/05/2024**

- Reveal settlements of faction you are allied with every 5 turns

**Siu - 05/06/2024**

- Added new building UI (Middle east)
- Added Barrow Wights Model
- Added Barrow Wights Unit Card
- Added Barrow Wights Unit Info Card
- Adjusted Unit Info Cards
  - Morannon Guards, Orc Archers

**Medik - 04/06/2024**
**Create Your Commander**

- New script exclusively for Bree
  The _Create Your Commander_ script allows you to create your own custom general with the following options

- Name
- Age
- Culture (Man of Bree, High Elf, Dwarf of the Blue Mountains, Dúnedan of the North)
- Background (This determines your unique starting trait and ancillaries)
- Bodyguard Unit
- Hero Ability

**Siu - 04/06/2024**

- Added new Serpent Units' Models
  - Serpent Guards, Serpent Archers, Serpent Bladesmen, Black Snake Guards
- Added Harad unit info cards
  - Serpent Guards, Serpent Archers, Serpent Bladesmen, Black Snake Guards
- Added new Khand Units' Models
  - Variag Nobles, Khandish Hunters, Khandish Raiders
- Renamed "Calenhad" to "Carathan"

**Siu - 31/05/2024**

- Reworked all High Elves unit info cards

**Siu - 27/05/2024**

- Added Kugath Chariot unit info card
- Reworked Gondor unit info cards
  - Ithilien Rangers, Osgiliath Veterans
- Reworked Dorwinion unit info cards
  - Avari Elders, Avari Spears, Avari Bows, Avari Warriors

**Medik - 26/05/2024**

- Moved settlement of Metraith
- Added 3 custom models for Metraith (Town, Large Town, City+)
- Added some custom lore and historic event for Metraith

**Medik - 25/05/2024**

- Add 2 new custom portraits for Bree's heir and starting spy
- Slightly adjust start positions of some Bree characters

**Siu - 25/05/2024**

- Edited Dorwinion Campaign UI (Change color slightly)
- Added Barrow Wights unit info card

**Medik - 24/05/2024**

- Removed Mengelen region
- Reworked "Barrows" region
- Fixed settlement cas models with religion requirements not setting correctly

**Medik - 11/05/2024**

- Make bodyguards only replenish automatically to 10 in Akallabêth mode
- Added AGO EOP theme (WIP)

**Medik - 28/04/2024**
**Resource Overhaul*- - Move old monument resources to generic strat models drawn with EOP - Added Kine of Araw as a new resource, raidable and generates income - Added Arnorian Ruins as a new resource, dispersed throughout Eriador, raidable but does not generate income - Added Camels as a new resource, dispersed along the southern border, raidable and generates income - Added Copper as a new resource, dispersed in hilly regions and enables the building of mines, raidable and generates income - Added Standing Stones/Menhir as a new resource, dispersed through Dunland and Hirwaith, raidable but does not generate income - Added Raided versions of each new resource - Added resource value and "Raidable" status to resource tooltips - Added tooltips system for generic resources

**Forsaken Inn Script*- - Added Forsaken Inn script - The Forsaken Inn is a new building in Bree, on the Eastern border - It has 3 levels, ruined, repaired and upgraded - Ruined: Public order malus and continues to spawn rebel armies until repaired or until occupied by Bree - Repaired: Generates small income, stops rebel army spawning, small chance to get a Ruffian general, enables recruitment of Ruffians - Upgraded: Generates good income, medium chance to get a Ruffian general, enables recruitment of Brandatudnas Riders and Brandatudnas Axemen

**Fynn - 23/04/2024**

- Improve map window implementation

**Serious Potato - 22/04/2024**

- Fixed some map borders around Isengard area and closed off access to Forodwaith

**Fynn - 22/04/2024**

- Add new map window feature
- Reorganize map resources for better trade
- Update EOP

**Medik - 19/04/2024**

- Added 150+ missing .dds textures in models_strat/textures

**Medik - 19/04/2024**

- Initial balance pass of Dorwinion units

**Medik - 16/04/2024**

- Update Orc/Eastern European UI with new core castle art and "happiness" pips

**Medik - 12/04/2024**

- Updated Longship Info and Unit card pics
- Added bullet points to building effects desc and better formatting of units available for recruitment

**Medik - 12/04/2024**

- Rework default difficulty settings
  - Hard is the new Very Hard (Normal AGO balance)
  - Easy/Explorer/Pipeweed mode for having fun or testing stuff
  - Ranger's Path mode (for new players, less AI cheats)
  - Akkelabeth mode with some pumped up AI modifiers (Needs more testing)
  - Reflavoured difficulty text and added tooltips

**Medik - 06/04/2024**

- Add Arnorian Ruin cas model

**Siu - ?/04/2024**

- Reworked all Dunland unit info card
- Added Drudan Hunters unit info card
- Edited Angmar Green Book UI

**Fynn - 01/04/2024**

- Continue Dunland work
- Improve choice scrolls

**Fynn - 31/03/2024**

- Update EOP

**Fynn - 30/03/2024**

- Improve LUA logger with logging levels
- Create new class for generalized choice scroll
- Continue Dunland work

**Fynn - 29/03/2024**

- Start converting new Dunland script to LUA

**Fynn - 28/03/2024**

- Fixes to raiding script

**Fynn - 27/03/2024**

- Various lua fixes

**Medik - 24/03/2024**

- Optimized textures for some settlements
- Wrote a system to easily and efficiently set settlement and fort and generic cas models based on a variety of options
  - Religion percentage
  - Buildings present
  - Faction ownership
- Added Restored Isengard model
- Added Minas Ithil model
- Added Restored Cirith Ungol model
- Update to EOP 3.1.1
- Reworked Forsaken Inn model

**Fynn - 15/02/2024**

- Various fixes and EOP updates
- Added dynamic replenishment script
- Work on ring script

**Siu - 14/03/2024**

- Added new Angmar Green Book UI

**Siu - 13/02/2024**

- Added 100 new protraits (Middle east)
- Added specific protraits to starting generals (Khand, Harad and Rhun)
- Random protrait fix
- Added folders
  - Building Ui background
  - Unit info background (Almost all Factions)
  - Protrait background (middle east)

**Fynn - 06/02/2024**

- Various fixes and EOP updates

**Fynn - 05/02/2024**

- Make some eop keybinds bindable in ingame-ui
- Improvements to character loot
- Start working on new ring script
- Add orc fort models back

**Fynn - 04/02/2024**

- Add new Nazgul script using LUA

**Fynn - 03/02/2024**

- Add dynamic post battle loot script and link it to raiding

**Fynn - 02/02/2024**

- Add some optimizations to LUA code

**Fynn - 01/02/2024**

- Reorganize the EOP character scroll
- Add script to assign cultural and raided resource models
- Add new passive and active raiding scripts
- Add AI raiding script

**Fynn - 31/01/2024**

- Move seasons script to lua
- Add new ageing script making human characters mortal and preventing immortal characters from looping back to 0.
- Refactor alias script
- Add new Lua auto-expansion script
- Add new AI merging script and script to automatically create generals for large AI captain armies.
- Add aggressive rebels script
- Add army sorting script
- Add dynamic bodyguard changer for Dunland
- Some fixes to EOP GUI

**Fynn - 30/01/2024**

- Adding automatic post battle saving system
- Refactor garrison scripts using real units
- Refactor alias script
- Add new Lua auto-expansion script

**Fynn - 29/01/2024**

- More refactoring of LUA
- Add EOPDU class for adding EOP units

**Fynn - 28/01/2024**

- Cleanup GUI code
- Start refactor lot of LUA code

**Medik - 26/01/2024**

- Add "Kugathi Rátha" (Chariots)
  - Added EB2_Chariot and EB_Scythed_Crew skeleton (unusued)
  - Added unit card
  - Added unit description
  - Added unique projectile for them
- Gave Grapevine Lancers "Wedge" formation

**Medik - 19/01/2024**

- Add "Wargs" Dunland event

**Medik - 31/12/2023**

- Added spawning logic and helper functions for Dunland's "Wandering Noble" event
- Add Great Flood Dunland evnet

**Medik - 27/12/2033**

- Enable perfect spy by default if dev mode is enabled
- Added a check to to the merge armies script to only merge armies of the same faction
- Fix save/load Lua error related to owner of resource tiles
- Added table log function and small other start/end logging statements

**Medik - 17/12/2033**

- Add custom historic events for specific factions, good and evil etc.

**Medik - 07/12/2033**

- Add Modding Tool to Tools folder
- Removed duplicate Lua files

**Medik - 06/12/2033**

- Add battle select and attack sounds for all new Dorwinion units

**Fynn - 05/12/2033**

- Upgraded to M2TWEOP 3.0.1
- Refactored Lua script to work with new events system

**Fynn - 03/12/2023**

- Improved raiding script

**Fynn - 03/12/2023**

- Upgrade Lua scripts to v3

**Medik - 02/12/2023**

- Upgrade to M2TWEOP 3.0.0

**Medik - 01/12/2023**

- Deleted enums files
- Add Dorwinion Kugath/Roudaengi selection sounds
- Added new custom 'unit' cards for Dorwinion Spy/Diplomat

**Medik - 24/11/2023**

- Updated Rohan's last stand event pic

**Medik - 23/11/2023**

- Added ability to set tooltips of buttons
- Updated the Wildmen scroll background to make text a bit more readable on it

**Medik - 22/11/2023**

- Added ability to queue up multiple scrolls of different types for rendering and added callback functions for them all

**Medik - 21/11/2023**

- Updated the scroll system to now have three scroll options
  - Normal scroll with no choice
  - Normal scroll with 2 choices
  - Normal scroll with 3 or more choices
- Added ability to show additional text after a choice is made

**Medik - 19/11/2023**

- Reorganized Lua files
- Organized Helper file with headings for each type of helper function
- Added an .editorconfig file for Lua formatting (CTRL + KF in VSC to format)
  - See https://github.com/CppCXY/EmmyLuaCodeStyle/blob/master/docs/format_config_EN.md for how to configure
- Formatted **all*- Lua files with new rules e.g
  - No semicolons
  - Aligned variable declartions
  - Double quotes over single quotes etc.
- Added f-strings library for Python style string templating
- Setup base for first Dunland random event (Someone Speaks Out

**Medik - 18/11/2023**

- Added Pythax's Bree UI

**Medik - 12/11/2023**

- Add some new loading screens
- Add gold versions of vanilla cursors (Credits: Tsardoms)
- Updated values in descr_ui_colour_db and removed any fluourescent green

**Medik - 07/11/2023**

- Made historic event scrolls wider to match the EOP scrolls
- Updated starting scroll image and Dorwinion faction info scroll image

**Medik - 4/11/2023**

- Add new tree models and textures for the mallorn trees in Lorien as well as the Lothlorien settlement/fort cas models
- Lorien Tree models V2
- Gave Dorwinion the "East_European" accent from vanilla (Removed all king + god references)
- Setup Dorwinion's units with appropriate voice lines (e.g Leofthiuda, Rouadengi and Kugath units all sound different)
- Added custom VO for the Dorwinion Mariners on the battle map, stratmap and for admirals

**Medik - 1/11/2023**

- Added description for Skreulingir
- Set faction specific UI on game start
- Renamed Privateer units to Tudnas and wrote them a new description

**Medik - 31/10/2023**

- Fixed all errors reported by the ModdingTool
- Renamed other Dorwinion starting settlements
- Removed Dorwinion historic event intro (Shown with EOP instead)
- Redid Dorwinion portraits to look like real people
- Updated ages of starting generals to better match portraits

**Medik - 30/10/2023**

- Added some new batch/python scripts
- Cleaned some unused model_strat models (residences still to do)

**Medik - 25/10/2023**

- Added 15 new custom ancilliaries for Dorwinion with unqiue triggers, effects, flavour text and images

**Medik - 19/10/2023**

- Added a new strat model for Dorwinion Mariners and assigned it to Herîon on Nebhurka
- Added a Kugathi general with a very small army on the southern border with Rhun by the crossing
- Add Kugathi, Leofthiuda and Rouadengi traits
- Updated Dorwinion's unit EDU Entries and all files to better correspond to the new roster (e.g Thorn Guards > Council Wardens)
- Removed unused Dorwinion EDU entries and any associated files (BMDB untouched)
- Fixed a bunch of sound errors and broken files
- Added some new, higher quality main menu music from the movies
- Added a custom "Start new campaign" sound
- Rebuilt .dat/.idx files

**Medik - 17/09/2024**

- Fix Gorathul placement
- Added custom army selection color for Moria
- Fixed Dome of the Stars placement
- Add Control DA event pic and updated event text
- Slightly adjust command star colors to be less dull
- Add new banner symbols for Erebor, Ered Luin, Angmar, Khand, Goblins of Moria, Isengard and Enedwaith

**Medik - 15/10/2023**

- Added Siu's map of Divide and Conquer's Middle-earth as a new loading screen
- Updated Freecam to 1.2.1

**Medik - 10/10/2023**

- Added Siu's map of Divide and Conquer's Middle-earth as a new loading screen
- Updated Freecam to 1.2.1

**Medik - 08/10/2023**

- Added new custom settlement select texture
- Filled out the rest of Dorwinion's unit descriptions
- Added custom portraits for all of Dorwinion's starting generals and some bonus ones
- Updated armies and characters of starting armies to make more sense
- Add new custom character "Herîon", a retired mariner, to the Isle of Nebhurka
- Reorganized descr_character and descr_model_strat (Dorwinion entries)
- Added a new strat model for "Dorwinion Mariners"
- Renamed Vine-Regent to Vintner-Regent
- Renamed Vine-Lord to First Councillor

**Medik - 07/10/2023**

- Added Helcarin cas model
- Moved Helcarin slightly North
- Added Avari Hideout cas model
- Added a forested valley path into the Dorwinion Mountains
- Added an Avari Hideout with a large locked garrison in the middle of the valley
- Added a custom general (Gwathredir) with a custom portrait and updated the Avari trait text
- Added an Avari Hideout (Garrison TBD) to a new forest in Dorwinion with high fertility ground undernearth
- Renamed "Nurwe" to "Gwathredir" in the files
- Regions untouched
- Added new Avari custom general "Hervail" to the forest hideout in Dorwinion
- Added Siu's custom UI for Dorwinion and his sub-culture pictures/art

**Medik - 05/10/2023**

- Updated EOP to 2.2.3
- Renamed Caras Sant to Helcârin
- Added stack sorting on character select and on faction turns
- Add Wulfingir models

**Medik - 04/10/2023**

- Add Ambient Sound Overhaul
- Added 150+ unique sounds, 45 minutes of audio in total. There are sounds for
- Ambient sounds for Orcish, Dwarven, Elven, Men, Wildmen and Southmen settlements, different ones for Town and City
- Added brand new (climate appropriate) ambient sounds for generic Mountains, Hills, Dense and Sparse forests, Swamps, Beaches, Oceans, Khandish steppe and rocky deserts, different ones for Winter and Summer
- Added brand new location specific sounds for regions such as - Moria and the Goblin Tunnels - Mirkwood - Mordor - Dead Marshes - Brown Lands/Dol Goldur
- Normalized and (far too heavily) tested everything to make sure that everything sounds correct and blends correctly
- Added Freecam 1.2 to the "tools" folder
- Added a roster outline for Moria to the "docs" folder
- Added recommended audio mixing

**Medik - 04/10/2023**

- Changed "Trolls" to "Cave Trolls" and wrote them a new description
- Added new models for "Cave Trolls"
  - Replaces older model
  - No longer has an upgraded version
  - Credits to Ole Gunnar Isager for the original model and Leo/imortandorf for the body

**Medik - 20/08/2023**

- Updated the existing raiding scroll to use the "Half Scroll" format
- Added an "Info" section to the raiding scroll that explains how the script works
- Added button press and open/close sounds to the raiding scroll using existing in-game sound events
- Slightly desaturated farm resource textures to help blend in better with the map

**Siu - 22/08/2024**

- Add info cards
  - merc(hre, russia)

**Siu - 20/07/2023**

- Added New unit info cards to all Factions
- Removed unit info cards that are not being used

**Medik - 18/07/2023**

- Added Siu's new AA UI and ability to add custom UI for every faction
- Added Siu's Wildmen and Northmen ImGUI Scroll backgrounds

**Siu - 18/07/2023**

- Added new unit cards for Woodland Realm and Lorien

**Medik - 16/07/2023**

- Added strat models for Leofthiuda Retainers and Avari Captains
- Added Lerynian's new Dorwinion strat flag symbol

**Medik - 12/07/2023**

- Made some new orc Attack, Selection and Siege SFX

**Medik - 11/07/2023**

- Updated main Dorwinion banners faction symbols/icons everywhere
- Updated faction leader picture for Dorwinion
- Updated rebel banner icons with Tengwar/Runes
- Fixed some Dorwinion unit names and TBD the old descriptions
- Update CAS model textures (mountains) to blend with new terrain map textures
- Updated a bunch of Dorwinion unit descriptions (only 4 remain!)

**Medik - 08/07/2023**

- Updated to latest EOP Version (M2TWEOP-2.2.2)
- Add new custom projectile for Dorwinion Mariners
- Give M2TWEOP GUI.exe the AGO icon
- Added CAS models for Lossoth Village, Forsaken Inn, Pillar of Umbar and Dunlending Menhir

**Medik - 06/07/2023**

- Renamed 'Vale of Dorwinion' to 'Dorwinion/Vintner Court of Dorwinion' where appropriate
- Added Fixed Leofthiuda

**Medik - 06/07/2023**

- Added Fynn's custom versions of the old Stratmap textures. They should now be less grainy and blend in better with each other.
- Moved the project to GitHub
- Added Lua refactor and Generic ImGUI Event System

**Fynn - 11/03/2023**

- Added back toggle unit highlight bind, CTRL+Q by default like before but rebindable now in ingame settings, under 'Toggle Unit Highlight'

**Fynn - 10/03/2023**

- Your culture buildings now correctly increase daen culture instead of wildmen
- Added missing building ui's from siu
- Added pics for the missions by medik
- Small fixes to lua
- Gave hillsteed riders javelins

**Fynn - 01/03/2023**

- Added TED's new settlement strat models, should be save game compatible

**Fynn - 28/02/2023**

- Improved lua scripts, made rebels script really fast, this part probably not save-game compatible
- Added event pics (by Medik) and text for all events

**Fynn - 26/02/2023**

- New unit cards by coma for whole Dunland roster

**Fynn - 26/02/2023**

- Added more culture strat models and burned version of every raidable resource
- Balanced economy a bit
- Made guilds harder to get
- Added strat models for the Dunland ethnicities
- New ui for wildmen (not completely finished)
- Added epithet trait for dunland ethnicites
- Changed wildmen town to a battlemap from DBM
- Slight lua fixes

**Fynn - 26/02/2023**

- Updated text for missions and dunland faction leader starting ancillaries, added text for the guilds

**Fynn - 25/02/2023**

## DUNLAND

- Unique bodyguards for the different general types
- building system where you can assign each conquered land as a tribal home or allied tribe/raiding land, your units also come from this no barracks
- raiding trait with which you level your generals by raiding and winning battles (having no experience makes them worse so its good to train them)
- Sacrificial omens: each turns the superstitious dunlendings make a new sacrifice and depending on the outcome your troops can have morale buffs or debuffs (its a trait on your general)

### Isengard influence script

Doing various things gains you guild points for either the dunhird council or isengard guild, slowly as the campaign progresses you either go to one side or another depending on which guilds you choose to accept and your choices in the event pop ups, final result for each tree is either war with isengard and independace on one side or becoming a half orc factions with less dunlending on the other side

### Dunland reforms

You need to capture Edoras, hold at least 3 settlements at city level (you cant make those yet so you have to conquer), and your faction leader needs to have the max level of the raiding trait (legendary reaver)
Raiding:
Press 'X' key to open the GUI window

### Passive raiding

Stand in enemy territory to passively generate low amounts of loot or cause devastation to generate more loot (this will update after you end the turn, it is via trait)

### Active raiding

Stand on an enemy resource and click the raid button in the menu to instantly get loot and slaves, you cant raid the same resource for 12 turns, some resources have a burned version (just standard village for now), I recommend typing 'reset_display' once in console after loading campaign to get all the changed CAS models to show (there are also culture specific village resources)

Return the loot you have to a settlement to get the money the character holds and increase population with slaves (again with the gui menu)

AI can raid your resources which will make you lose money so attack armies you see standing on your resources, they stand still on them for 1 turn so you can prevent the raid

---

General mod changes:

- AI automatically merges nearby smaller armies
- Rebels are aggressive and attack and even siege settlements
- Large AI stacks without generals get a free general (there is a max based on their amount of settlements)
- New lua auto expansion script where units and generals are randomized each campaign
- New garrison script with actual units
- Aging and seasons is done via lua and now human characters are mortal while the immortal races arent
- Mod makes a save automatically after each battle
- Ring script fully ported to lua (probably buggy, not very tested)
- New religions for isengard and dunland
- New portraits expanded for wildmen

**Medik - 04/01/2023**

- Added unit cards for all new Dorwinion units
- Added unit cards for new Orc Host and Warchanters

**Lerynian - 24/11/2022**

- Added banners for Avari elves

**Medik - 23/11/2022**

- Updated the default EOP launcher settings so they do need to be setup on a fresh install and edited the default banner image

**Lerynian - 23/11/2022**

- Replaced (too elvish) sword with a new for avari archers and ambushers

**Lerynian - 22/11/2022**

- Added Kugath noble unit files

**Medik - 22/11/2022**

- Updated Custom Battle locations with the following
  - Bay of Forochel
  - Isle of Nebur
  - Nurn
  - Withered Heath
  - Goblin Tunnels
  - Swanfleet
  - The Angle
  - Dead Marshes
  - Trollshaws
  - Shores of Evendim
  - Forlindon
  - An Karagmir

**Medik - 22/11/2022**

- Replaced Warchanters with Warmaidens

**Lerynian - 17/11/2022**

- Added unit cards to all new available dorwinion units

**Lerynian - 14/11/2022**

- Added new dorwinion banners to units
- Fixed the captain rigging and made him appear in battles
- Avari elves are again possible to test in game

**Fynn - 30/10/2022**

- Added auto-expansion and some more stuff to lua

**Fynn - 29/10/2022**

- Some more fixes to the ring-script

**Fynn - 29/10/2022**

- Again lua stuff

**Fynn - 29/10/2022**

- Updated lot of lua scripts (Ring script converted to lua for most part) and some other minor things

**Fynn - 27/10/2022**

- Uploaded all my recent work for Dunland and with Lua

**Lerynian - 26/10/2022**

- Added late WIP avari elves to BMDB and EDU. For models and textures either download separetly every file with "dw_avari..." or download whole Dorwinion_Lerynian folder again

**Medik - 12/10/2022**

- Updated the 'Orc Host' unit to now use the updated models and textures

**Lerynian - 10/10/2022**

- Probably fixed a crash from citizen guard
- Fixed the mariners standing on horses

**Lerynian - 08/10/2022**

- Added available Dorwinion units to BMDB and EDU
- Changed names of replaced units to better navigate in custom battles

**Medik - 02/08/2022**

- Added finance scroll pictures for each unique culture