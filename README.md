<p align="center">
  <img src="https://github.com/antoinezanardi/werewolves-assistant-api-next/blob/main/public/assets/images/logo/full/werewolves-logo.png?raw=true" width="400" alt="logo"/>
</p>

---

![TypeScript](https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=809FFF&logo=typescript&color=2a2c54)
![Nuxt](https://img.shields.io/badge/-Nuxt-black?style=for-the-badge&logo=nuxt.js&logoColor=00DC81&color=2a2c54)
![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-black?style=for-the-badge&logo=tailwindcss&logoColor=37BCF8&color=2a2c54)

[![⚙️ Build Workflow](https://github.com/antoinezanardi/werewolves-assistant-web-next/actions/workflows/build.yml/badge.svg)](https://github.com/antoinezanardi/werewolves-assistant-web-next/actions/workflows/build.yml)
[![🚀 Deploy To Production Workflow](https://github.com/antoinezanardi/werewolves-assistant-web-next/actions/workflows/deploy-to-production.yml/badge.svg)](https://github.com/antoinezanardi/werewolves-assistant-web-next/actions/workflows/deploy-to-production.yml)

[![GitHub release](https://img.shields.io/github/release/antoinezanardi/werewolves-assistant-web-next.svg)](https://GitHub.com/antoinezanardi/werewolves-assistant-web-next/releases/)
[![semantic-release: conventional commits](https://img.shields.io/badge/semantic--release-conventional%20commits-Æ1A7DBD?logo=semantic-release&color=1E7FBF)](https://github.com/semantic-release/semantic-release)
[![GitHub license](https://img.shields.io/github/license/antoinezanardi/werewolves-assistant-web-next.svg)](https://github.com/antoinezanardi/https://img.shields.io/github/license/werewolves-assistant-web-next.svg/blob/main/LICENSE)
![Dependencies](https://img.shields.io/badge/-dependencies-black?style=flat-square&logoColor=white&logo=pnpm&color=B76507)[![Known Vulnerabilities](https://snyk.io/test/github/antoinezanardi/werewolves-assistant-web-next/badge.svg?targetFile=package.json&style=flat-square)](https://snyk.io/test/github/antoinezanardi/werewolves-assistant-web-next?targetFile=package.json)

[![Tests count](https://byob.yarr.is/antoinezanardi/werewolves-assistant-web-next/tests-count)](https://byob.yarr.is/antoinezanardi/werewolves-assistant-web-next/tests-count)
[![Covered Statements](https://byob.yarr.is/antoinezanardi/werewolves-assistant-web-next/covered-statements)](https://byob.yarr.is/antoinezanardi/werewolves-assistant-web-next/covered-statements)
[![Scenarios](https://byob.yarr.is/antoinezanardi/werewolves-assistant-web-next/scenarios)](https://byob.yarr.is/antoinezanardi/werewolves-assistant-web-next/scenarios)
[![Mutation testing badge](https://img.shields.io/endpoint?style=flat&url=https%3A%2F%2Fbadge-api.stryker-mutator.io%2Fgithub.com%2Fantoinezanardi%2Fwerewolves-assistant-web-next%2Fmain)](https://dashboard.stryker-mutator.io/reports/github.com/antoinezanardi/werewolves-assistant-web-next/main)

[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=antoinezanardi_werewolves-assistant-web-next&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=antoinezanardi_werewolves-assistant-web-next)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=antoinezanardi_werewolves-assistant-web-next&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=antoinezanardi_werewolves-assistant-web-next)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=antoinezanardi_werewolves-assistant-web-next&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=antoinezanardi_werewolves-assistant-web-next)

## 📋 Table of Contents

1. 🐺 [What is this app ?](#what-is-this-app)
2. ✨ [Production and development links](#production-and-development-links)
3. 🃏 [Available roles](#available-roles)
4. 📸 [Screenshots](#screenshots)
5. 🔨 [Installation](#installation)
6. 🚀 [Build](#build)
7. 🐳 [Docker](#docker)
8. 💯 [Tests](#tests)
9. 🌿 [Env variables](#env-variables)
10. ☑️ [Code analysis and consistency](#code-analysis-and-consistency)
11. 📈 [Releases & Changelog](#versions)
12. 🐙 [GitHub Actions](#github-actions)
13. ✨ [Misc commands](#misc-commands)
14. ©️ [License](#license)
15. ❤️ [Contributors](#contributors)

## <a name="what-is-this-app">🐺 What is this app ?</a>
Werewolves Assistant Web is a Nuxt Web App using the Werewolves Assistant API. It helps you, the game master, to manage your games of Werewolves Of Millers Hollow.

> [!NOTE]
> This is the **next** version of the deprecated **[Werewolves Assistant Web](https://github.com/antoinezanardi/werewolves-assistant-web)**.
> It is maintained with the **[Werewolves Assistant API](https://github.com/antoinezanardi/werewolves-assistant-api-next)**.

#### 🤔 Want to know more about this awesome project ? <a href="https://werewolves-assistant.com/about" target="_blank">**Check out the dedicated about page**</a>.

## <a name="production-and-development-links">✨ Production and development links</a>

### 🌐 Production

The production version of this Web App is available at **[werewolves-assistant.com](https://werewolves-assistant.com)**.

It uses the **[Production Werewolves Assistant API](https://api.werewolves-assistant.com/docs)**.

The production server is updated automatically with the latest version of the Web App when a new release is created. (When a new tag is pushed on the `main` branch)

### 🛠️ Development

The development version of this Web App is available at **[preprod.werewolves-assistant.com](https://preprod.werewolves-assistant.com)**.

It uses the **[Preprod Werewolves Assistant API](https://preprod.api.werewolves-assistant.com/docs)**.

The development server is updated automatically when a commit is pushed on the `develop` branch.

## <a name="available-roles">🃏 Available roles</a>

|                <img src="https://github.com/antoinezanardi/werewolves-assistant-api-next/blob/main/public/assets/images/roles/werewolf/werewolf-small.jpeg?raw=true" width="40"/><br/>**Werewolf**                |     <img src="https://github.com/antoinezanardi/werewolves-assistant-api-next/blob/main/public/assets/images/roles/big-bad-wolf/big-bad-wolf-small.jpeg?raw=true" width="40"/><br/>**Big Bad Wolf**      | <img src="https://github.com/antoinezanardi/werewolves-assistant-api-next/blob/main/public/assets/images/roles/accursed-wolf-father/accursed-wolf-father-small.jpeg?raw=true" width="40"/><br/>**Accursed Wolf-Father** |             <img src="https://github.com/antoinezanardi/werewolves-assistant-api-next/blob/main/public/assets/images/roles/white-werewolf/white-werewolf-small.jpeg?raw=true" width="40"/><br/>**White Werewolf**             |
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
|                <img src="https://github.com/antoinezanardi/werewolves-assistant-api-next/blob/main/public/assets/images/roles/villager/villager-small.jpeg?raw=true" width="40"/><br/>**Villager**                |      <img src="https://github.com/antoinezanardi/werewolves-assistant-api-next/blob/main/public/assets/images/roles/villager/villager-small.jpeg?raw=true" width="40"/><br/> **Villager-Villager**       |                         <img src="https://github.com/antoinezanardi/werewolves-assistant-api-next/blob/main/public/assets/images/roles/seer/seer-small.jpeg?raw=true" width="40"/><br/>**Seer**                         |                          <img src="https://github.com/antoinezanardi/werewolves-assistant-api-next/blob/main/public/assets/images/roles/cupid/cupid-small.jpeg?raw=true" width="40"/><br/>**Cupid**                           |
|                    <img src="https://github.com/antoinezanardi/werewolves-assistant-api-next/blob/main/public/assets/images/roles/witch/witch-small.jpeg?raw=true" width="40"/><br/>**Witch**                     |              <img src="https://github.com/antoinezanardi/werewolves-assistant-api-next/blob/main/public/assets/images/roles/hunter/hunter-small.jpeg?raw=true" width="40"/><br/>**Hunter**               |              <img src="https://github.com/antoinezanardi/werewolves-assistant-api-next/blob/main/public/assets/images/roles/little-girl/little-girl-small.jpeg?raw=true" width="40"/><br/>**Little Girl**               |                      <img src="https://github.com/antoinezanardi/werewolves-assistant-api-next/blob/main/public/assets/images/roles/defender/defender-small.jpeg?raw=true" width="40"/><br/>**Defender**                      |
|                    <img src="https://github.com/antoinezanardi/werewolves-assistant-api-next/blob/main/public/assets/images/roles/elder/elder-small.jpeg?raw=true" width="40"/><br/>**Elder**                     |          <img src="https://github.com/antoinezanardi/werewolves-assistant-api-next/blob/main/public/assets/images/roles/scapegoat/scapegoat-small.jpeg?raw=true" width="40"/><br/>**Scapegoat**          |                       <img src="https://github.com/antoinezanardi/werewolves-assistant-api-next/blob/main/public/assets/images/roles/idiot/idiot-small.jpeg?raw=true" width="40"/><br/>**Idiot**                        |                 <img src="https://github.com/antoinezanardi/werewolves-assistant-api-next/blob/main/public/assets/images/roles/two-sisters/two-sisters-small.jpeg?raw=true" width="40"/><br/>**Two Sisters**                  |
|       <img src="https://github.com/antoinezanardi/werewolves-assistant-api-next/blob/main/public/assets/images/roles/three-brothers/three-brothers-small.jpeg?raw=true" width="40"/><br/>**Three Brothers**       |                   <img src="https://github.com/antoinezanardi/werewolves-assistant-api-next/blob/main/public/assets/images/roles/fox/fox-small.jpeg?raw=true" width="40"/><br/>**Fox**                   |                <img src="https://github.com/antoinezanardi/werewolves-assistant-api-next/blob/main/public/assets/images/roles/bear-tamer/bear-tamer-small.jpeg?raw=true" width="40"/><br/>**Bear Tamer**                |          <img src="https://github.com/antoinezanardi/werewolves-assistant-api-next/blob/main/public/assets/images/roles/stuttering-judge/stuttering-judge-small.jpeg?raw=true" width="40"/><br/>**Stuttering Judge**          |
| <img src="https://github.com/antoinezanardi/werewolves-assistant-api-next/blob/main/public/assets/images/roles/rusty-sword-knight/rusty-sword-knight-small.jpeg?raw=true" width="40"/><br/>**Rusty Sword Knight** |        <img src="https://github.com/antoinezanardi/werewolves-assistant-api-next/blob/main/public/assets/images/roles/wild-child/wild-child-small.jpeg?raw=true" width="40"/><br/>**Wild Child**         |                <img src="https://github.com/antoinezanardi/werewolves-assistant-api-next/blob/main/public/assets/images/roles/wolf-hound/wolf-hound-small.jpeg?raw=true" width="40"/><br/>**Wolf-Hound**                |                          <img src="https://github.com/antoinezanardi/werewolves-assistant-api-next/blob/main/public/assets/images/roles/thief/thief-small.jpeg?raw=true" width="40"/><br/>**Thief**                           |
|                    <img src="https://github.com/antoinezanardi/werewolves-assistant-api-next/blob/main/public/assets/images/roles/angel/angel-small.jpeg?raw=true" width="40"/><br/>**Angel**                     |        <img src="https://github.com/antoinezanardi/werewolves-assistant-api-next/blob/main/public/assets/images/roles/pied-piper/pied-piper-small.jpeg?raw=true" width="40"/><br/>**Pied Piper**         |           <img src="https://github.com/antoinezanardi/werewolves-assistant-api-next/blob/main/public/assets/images/roles/scandalmonger/scandalmonger-small.jpeg?raw=true" width="40"/><br/>**Scandalmonger**            | <img src="https://github.com/antoinezanardi/werewolves-assistant-api-next/blob/main/public/assets/images/roles/prejudiced-manipulator/prejudiced-manipulator-small.jpeg?raw=true" width="40"/><br/>**Prejudiced Manipulator** |
|                    <img src="https://github.com/antoinezanardi/werewolves-assistant-api-next/blob/main/public/assets/images/roles/actor/actor-small.jpeg?raw=true" width="40"/><br/>**Actor**                     | <img src="https://github.com/antoinezanardi/werewolves-assistant-api-next/blob/main/public/assets/images/roles/devoted-servant/devoted-servant-small.jpeg?raw=true" width="40"/><br/>**Devoted Servant** |                                                                                                                                                                                                                         |                                                                                                                                                                                                                               |

## <a name="screenshots">📸 Screenshots</a>

<details>
  <summary>🏠 Home Page</summary>
  
  ![Home page](https://raw.githubusercontent.com/antoinezanardi/werewolves-assistant-web-next/develop/tests/acceptance/screenshots/darwin/Home%20Page.png)

</details>

<details>
  <summary>❓ About Page</summary>

  ![About page](https://raw.githubusercontent.com/antoinezanardi/werewolves-assistant-web-next/develop/tests/acceptance/screenshots/darwin/About%20Page.png)

</details>

<details>
  <summary>🤼 Game Lobby Page</summary>

>  <details>
>    <summary>🤼 Game Lobby Page without players</summary>
>  
>    ![Game Lobby Page without players](https://raw.githubusercontent.com/antoinezanardi/werewolves-assistant-web-next/main/tests/acceptance/screenshots/darwin/Game%20Lobby%20Page%20without%20players.png)
>
>  </details>
>  
>  <details>
>    <summary>🤼 Game Lobby Page with 40 players</summary>
>  
>    ![Game Lobby Page with 40 players](https://raw.githubusercontent.com/antoinezanardi/werewolves-assistant-web-next/main/tests/acceptance/screenshots/darwin/Game%20Lobby%20Page%20with%2040%20players.png)
>  
>  </details>
>  
>  <details>
>    <summary>🃏 Game Lobby Role Picker without picked role</summary>
>  
>    ![Game Lobby Role Picker without picked role](https://raw.githubusercontent.com/antoinezanardi/werewolves-assistant-web-next/main/tests/acceptance/screenshots/darwin/Game%20Lobby%20Role%20Picker%20without%20picked%20role.png)
>  
>  </details>
>  
>  <details>
>    <summary>🃏 Game Lobby Role Picker with picked role</summary>
>  
>    ![Game Lobby Role Picker with picked role](https://raw.githubusercontent.com/antoinezanardi/werewolves-assistant-web-next/main/tests/acceptance/screenshots/darwin/Game%20Lobby%20Role%20Picker%20with%20picked%20role.png)
>  
>  </details>
>  
>  <details>
>    <summary>⚙️ Game Lobby Options Hub</summary>
>  
>    ![Game Lobby Options Hub](https://raw.githubusercontent.com/antoinezanardi/werewolves-assistant-web-next/main/tests/acceptance/screenshots/darwin/Game%20Lobby%20Options%20Hub%20on%20Roles%20tab.png)
>  </details>
>  <details>
>    <summary>🃏🃏🃏️ Game Lobby Additional Cards Manager without cards</summary>
>  
>    ![Game Lobby Additional Cards Manager without cards](https://raw.githubusercontent.com/antoinezanardi/werewolves-assistant-web-next/main/tests/acceptance/screenshots/darwin/Game%20Lobby%20Additional%20Cards%20Manager%20without%20cards.png)
>  </details>
>  <details>
>    <summary>🃏🃏🃏️ Game Lobby Additional Cards Manager with 5 cards</summary>
>  
>    ![Game Lobby Additional Cards Manager with 5 cards](https://raw.githubusercontent.com/antoinezanardi/werewolves-assistant-web-next/main/tests/acceptance/screenshots/darwin/Game%20Lobby%20Additional%20Cards%20Manager%20with%205%20cards.png)
>  </details>
</details>

<details>
  <summary>🎲 Game Page</summary>

>  <details>
>    <summary>🕹️ Game Playgrounds</summary>
>     
>>   <details>
>>    <summary>🐺 Accursed Wolf-Father infects Playground</summary>
>>
>>    ![Accursed Wolf-Father infects Playground](https://raw.githubusercontent.com/antoinezanardi/werewolves-assistant-web-next/main/tests/acceptance/screenshots/darwin/Accursed%20Wolf-Father%20infects%20Playground.png)
>>   </details>
>>   <details>
>>    <summary>🎭 Actor chooses card Playground</summary>
>>
>>    ![Actor chooses card Playground](https://raw.githubusercontent.com/antoinezanardi/werewolves-assistant-web-next/main/tests/acceptance/screenshots/darwin/Actor%20chooses%20card%20Playground.png)
>>   </details>
>>   <details>
>>    <summary>🐺 👹 Big Bad Wolf eats Playground</summary>
>>        
>>    ![Big Bad Wolf eats Playground](https://raw.githubusercontent.com/antoinezanardi/werewolves-assistant-web-next/main/tests/acceptance/screenshots/darwin/Big%20Bad%20Wolf%20eats%20Playground.png)
>> 
>>   </details>
>>   <details>
>>    <summary>😵‍💫 Charmed people meet each other Playground</summary>
>>
>>    ![Charmed people meet each other Playground](https://raw.githubusercontent.com/antoinezanardi/werewolves-assistant-web-next/main/tests/acceptance/screenshots/darwin/Charmed%20people%20meet%20each%20other%20Playground.png)
>>        
>>   </details>
>>   <details>
>>    <summary>👼 Cupid charms Playground</summary>
>>
>>    ![Cupid charms Playground](https://raw.githubusercontent.com/antoinezanardi/werewolves-assistant-web-next/main/tests/acceptance/screenshots/darwin/Cupid%20charms%20Playground.png)
>>   </details> 
>>   <details>
>>    <summary>🛡️ Defender protects Playground</summary>
>>        
>>    ![Defender protects Playground](https://raw.githubusercontent.com/antoinezanardi/werewolves-assistant-web-next/main/tests/acceptance/screenshots/darwin/Defender%20protects%20Playground.png)
>> 
>>   </details>
>>   </details> 
>>   <details>
>>    <summary>🦊 Fox sniffs Playground</summary>
>>        
>>    ![Fox sniffs Playground](https://raw.githubusercontent.com/antoinezanardi/werewolves-assistant-web-next/main/tests/acceptance/screenshots/darwin/Fox%20sniffs%20Playground.png)
>> 
>>   </details>
>>   <details>
>>    <summary>🔫 Hunter shoots Playground</summary>
>>        
>>    ![Hunter shoots Playground](https://raw.githubusercontent.com/antoinezanardi/werewolves-assistant-web-next/main/tests/acceptance/screenshots/darwin/Hunter%20shoots%20Playground.png)
>> 
>>   </details>
>>   <details>
>>   <summary>💞 Lovers meet each other Playground</summary>
>>
>>    ![Lovers meet each other Playground](https://raw.githubusercontent.com/antoinezanardi/werewolves-assistant-web-next/main/tests/acceptance/screenshots/darwin/Lovers%20meet%20each%20other%20Playground.png)
>>   </details> 
>>   <details>
>>    <summary>🪈 Pied Piper charms Playground</summary>
>>
>>    ![Pied Piper charms Playground](https://raw.githubusercontent.com/antoinezanardi/werewolves-assistant-web-next/main/tests/acceptance/screenshots/darwin/Pied%20Piper%20charms%20Playground.png)
>>
>>  </details>
>>   <details>
>>    <summary>🐦‍⬛ Scandalmonger marks Playground</summary>
>>
>>    ![Scandalmonger marks Playground](https://raw.githubusercontent.com/antoinezanardi/werewolves-assistant-web-next/main/tests/acceptance/screenshots/darwin/Scandalmonger%20marks%20Playground.png)
>>   </details>
>>   </details> 
>>   <details>
>>    <summary>🐐 Scapegoat bans voting Playground</summary>
>>        
>>    ![Scapegoat bans voting Playground](https://raw.githubusercontent.com/antoinezanardi/werewolves-assistant-web-next/main/tests/acceptance/screenshots/darwin/Scapegoat%20bans%20voting%20Playground.png)
>> 
>>   </details>
>>   <details>
>>    <summary>🔮 Seer looks Playground</summary>
>>        
>>    ![Seer looks Playground](https://raw.githubusercontent.com/antoinezanardi/werewolves-assistant-web-next/main/tests/acceptance/screenshots/darwin/Seer%20looks%20Playground.png)
>> 
>>   </details>
>>   <details>
>>    <summary>🎖️ Sheriff delegates Playground</summary>
>>
>>    ![Sheriff delegates Playground](https://raw.githubusercontent.com/antoinezanardi/werewolves-assistant-web-next/main/tests/acceptance/screenshots/darwin/Sheriff%20delegates%20Playground.png)
>>   </details>
>>   <details>
>>    <summary>🎖️ Sheriff settles votes Playground</summary>
>>
>>    ![Sheriff settles votes Playground](https://raw.githubusercontent.com/antoinezanardi/werewolves-assistant-web-next/main/tests/acceptance/screenshots/darwin/Sheriff%20settles%20votes%20Playground.png)
>>   </details>
>>   <details>
>>    <summary>⚖️️ Stuttering Judge Requests Another Vote Playground</summary>
>>
>>    ![Stuttering Judge Requests Another Vote Playground](https://raw.githubusercontent.com/antoinezanardi/werewolves-assistant-web-next/main/tests/acceptance/screenshots/darwin/Stuttering%20Judge%20Requests%20Another%20Vote%20Playground.png)
>>   </details>
>>   <details>
>>    <summary>🎖️ Survivors elect the Sheriff Playground</summary>
>>
>>    ![Survivors elect the Sheriff Playground](https://raw.githubusercontent.com/antoinezanardi/werewolves-assistant-web-next/main/tests/acceptance/screenshots/darwin/Survivors%20elect%20Sheriff%20Playground.png)
>>   </details>
>>   <details>
>>    <summary>👺 Thief chooses card Playground</summary>
>>
>>   ![Thief chooses card Playground](https://raw.githubusercontent.com/antoinezanardi/werewolves-assistant-web-next/main/tests/acceptance/screenshots/darwin/Thief%20chooses%20card%20Playground.png)
>>   </details>
>>   <details>
>>    <summary>👨‍👨‍👦 Three Brothers meet each other Playground</summary>
>>
>>    ![Three Brothers meet each other Playground](https://raw.githubusercontent.com/antoinezanardi/werewolves-assistant-web-next/main/tests/acceptance/screenshots/darwin/Three%20Brothers%20meet%20each%20other%20Playground.png)
>>
>>   </details>
>>   <details>
>>    <summary>👯‍ Two Sisters meet each other Playground</summary>
>>
>>    ![Two Sisters meet each other Playground](https://raw.githubusercontent.com/antoinezanardi/werewolves-assistant-web-next/main/tests/acceptance/screenshots/darwin/Two%20Sisters%20meet%20each%20other%20Playground.png)
>>
>>   </details>
>>   <details>
>>    <summary>🐺 Werewolves eat Playground</summary>
>>        
>>    ![Werewolves eat Playground](https://raw.githubusercontent.com/antoinezanardi/werewolves-assistant-web-next/main/tests/acceptance/screenshots/darwin/Werewolves%20eat%20Playground.png)
>> 
>>   </details>
>>   <details>
>>    <summary>🦴🐺 White Werewolf eats Playground</summary>
>>
>>    ![White Werewolf eats Playground](https://raw.githubusercontent.com/antoinezanardi/werewolves-assistant-web-next/main/tests/acceptance/screenshots/darwin/White%20Werewolf%20eats%20Playground.png)
>>   </details>
>>   <details>
>>    <summary>🐒 Wild Child chooses model Playground</summary>
>>
>>    ![Wild Child chooses model Playground](https://raw.githubusercontent.com/antoinezanardi/werewolves-assistant-web-next/main/tests/acceptance/screenshots/darwin/Wild%20Child%20chooses%20model%20Playground.png)
>>   </details>
>>   <details>
>>    <summary>🪄 Witch uses life potion Playground</summary>
>>
>>    ![Witch uses life potion Playground](https://raw.githubusercontent.com/antoinezanardi/werewolves-assistant-web-next/main/tests/acceptance/screenshots/darwin/Witch%20uses%20life%20potion%20Playground.png)
>>   </details>
>>   <details>
>>    <summary>🪄 Witch uses death potion Playground</summary>
>>
>>    ![Witch uses death potion Playground](https://raw.githubusercontent.com/antoinezanardi/werewolves-assistant-web-next/main/tests/acceptance/screenshots/darwin/Witch%20uses%20death%20potion%20Playground.png)
>>   </details>
>>   <details>
>>    <summary>🪄 Witch out of potions Playground</summary>
>>
>>    ![Witch out of potions Playground](https://raw.githubusercontent.com/antoinezanardi/werewolves-assistant-web-next/main/tests/acceptance/screenshots/darwin/Witch%20out%20of%20potions%20Playground.png)
>>   </details>
>>   <details>
>>    <summary>🐕 Wolf-Hound chooses side Playground</summary>
>>
>>    ![Wolf-Hound chooses side Playground](https://raw.githubusercontent.com/antoinezanardi/werewolves-assistant-web-next/main/tests/acceptance/screenshots/darwin/Wolf-Hound%20chooses%20side%20Playground.png)
>>   </details> 
>>   <details>
>>    <summary>🤷 Game Playground without targets</summary>
>>
>>    ![Game Playground without targets](https://raw.githubusercontent.com/antoinezanardi/werewolves-assistant-web-next/main/tests/acceptance/screenshots/darwin/Game%20Playground%20without%20targets.png)
>>  </details>
>  
>  </details>
>  <details>
>  <summary>🌟 Game Events</summary>
>
>>  <details>
>>    <summary>🎬 Game Starts Event</summary>
>>
>>    ![Game Starts Event](https://raw.githubusercontent.com/antoinezanardi/werewolves-assistant-web-next/main/tests/acceptance/screenshots/darwin/Game%20Starts%20Event.png)
>>  </details>
>>  <details>
>>    <summary>🌙 Game Phase Event</summary>
>>
>>    ![Game Phase Event](https://raw.githubusercontent.com/antoinezanardi/werewolves-assistant-web-next/main/tests/acceptance/screenshots/darwin/Game%20Phase%20Event.png)
>>  </details>
>  </details>
>  <details>
>    <summary>❓ Game not found</summary>
>  
>    ![Game not found](https://raw.githubusercontent.com/antoinezanardi/werewolves-assistant-web-next/main/tests/acceptance/screenshots/darwin/Game%20not%20found.png)
>  
>  </details>
>  
>  <details>
>    <summary>❌ Game canceled</summary>
>  
>    ![Game canceled](https://raw.githubusercontent.com/antoinezanardi/werewolves-assistant-web-next/main/tests/acceptance/screenshots/darwin/Game%20canceled.png)
>  
>  </details>
</details>

<details>
  <summary>🏆 Game Victory Page</summary>

>  <details>
>    <summary>🪽 Game won by Angel</summary>
>  
>    ![Game won by Angel](https://raw.githubusercontent.com/antoinezanardi/werewolves-assistant-web-next/main/tests/acceptance/screenshots/darwin/Game%20won%20by%20Angel.png)
>  
>  </details>
>  
>  <details>
>    <summary>💞 Game won by Lovers</summary>
>  
>    ![Game won by Lovers](https://raw.githubusercontent.com/antoinezanardi/werewolves-assistant-web-next/main/tests/acceptance/screenshots/darwin/Game%20won%20by%20Lovers.png)
>  
>  </details>
>
>  <details>
>    <summary>💞👼 Game won by Lovers and Cupid</summary>
>  
>    ![Game won by Lovers and Cupid](https://raw.githubusercontent.com/antoinezanardi/werewolves-assistant-web-next/main/tests/acceptance/screenshots/darwin/Game%20won%20by%20Lovers%20and%20Cupid.png)
>  
>  </details>
>  
>  <details>
>    <summary>🧑🏻‍🌾 Game won by Villagers</summary>
>  
>    ![Game won by Villagers](https://raw.githubusercontent.com/antoinezanardi/werewolves-assistant-web-next/main/tests/acceptance/screenshots/darwin/Game%20won%20by%20Villagers.png)
>  
>  </details>
>  
>  <details>
>    <summary>🐺 Game won by Werewolves</summary>
>  
>    ![Game won by Werewolves](https://raw.githubusercontent.com/antoinezanardi/werewolves-assistant-web-next/main/tests/acceptance/screenshots/darwin/Game%20won%20by%20Werewolves.png)
>  </details>
>  
>  <details>
>    <summary>☠️ Game won by nobody</summary>
>  
>    ![Game won by nobody](https://raw.githubusercontent.com/antoinezanardi/werewolves-assistant-web-next/main/tests/acceptance/screenshots/darwin/Game%20won%20by%20nobody.png)
>  </details>
>  
>  <details>
>    <summary>🪈 Game won by Pied Piper</summary>
>  
>    ![Game won by Pied Piper](https://raw.githubusercontent.com/antoinezanardi/werewolves-assistant-web-next/main/tests/acceptance/screenshots/darwin/Game%20won%20by%20Pied%20Piper.png)
>  </details>
>  
>  <details>
>    <summary>🐺 🦴 Game won by White Werewolf</summary>
>  
>    ![Game won by White Werewolf](https://raw.githubusercontent.com/antoinezanardi/werewolves-assistant-web-next/main/tests/acceptance/screenshots/darwin/Game%20won%20by%20White%20Werewolf.png)
>  </details>
>
</details>

<details>
  <summary>❓ Page not found</summary>

  ![Page not found](https://raw.githubusercontent.com/antoinezanardi/werewolves-assistant-web-next/main/tests/acceptance/screenshots/darwin/Page%20not%20found.png)

</details>

## <a name="installation">🔨 Installation</a>

To install this project, you will need to have on your machine :

![Node](https://img.shields.io/badge/-nodejs-black?style=for-the-badge&logoColor=white&logo=node.js&color=366A31)
![PNPM](https://img.shields.io/badge/-pnpm-black?style=for-the-badge&logoColor=white&logo=pnpm&color=B76507)

We recommend to use the node version specified in the `.nvmrc` file. At least, you'll need to have version `20` installed as mentioned in `package.json` file.

> [!TIP]
> If you don't have `pnpm` installed, you can still use `npm` for all commands below, but we recommend to use `pnpm` for faster and more reliable installations.

Then, run the following commands :

```bash
# Install dependencies and Husky hooks
pnpm install

# Run the app in dev mode
pnpm run dev
```

The above command will start the app in development mode and watch for changes on local.

## <a name="build">🚀 Build</a>

In order to build the app for production, run the following command :

```bash
# Build the app
pnpm run build
```

## <a name="docker">🐳 Docker</a>

This app is Docker ready !

The Dockerfile is available at the root of the project. It uses a multi-stage build to optimize the image size.

You can run the whole project (including MongoDB and the Werewolves Assistant API) with the following command :

```bash
# Run the whole project with `develop` tags for the API and the Web app
pnpm run docker:preproduction-example:start

# Run the whole project with `latest` tags for the API and the Web app
pnpm run docker:production-example:start
```

> [!TIP]
> The `docker-compose.yml` file used for the preproduction example stated above is available **[here](https://github.com/antoinezanardi/werewolves-assistant-web-next/blob/master/docker/werewolves-assistant-preproduction-example/docker-compose.yml)**.
> The `docker-compose.yml` file used for the production example stated above is available **[here](https://github.com/antoinezanardi/werewolves-assistant-web-next/blob/master/docker/werewolves-assistant-preproduction-example/docker-compose.yml)**.

### 🏷️ Docker Tags

Because of the Nuxt pre-rendering feature, environment variables are injected at build time on some pages. Therefore, multiple tags are created when pushing to `develop` and `main` branches.

### ⛵️ When pushing to `develop` branch

- `antoinezanardi/werewolves-assistant-web-next:preprod-fr` : Pre-rendered app with French language and calling the Werewolves Assistant API deployed from `develop` branch (`"https://preprod.api.werewolves-assistant.com"`)
- `antoinezanardi/werewolves-assistant-web-next:preprod-en` : Pre-rendered app with English language and calling the Werewolves Assistant API deployed from `develop` branch (`"https://preprod.api.werewolves-assistant.com"`)
- `antoinezanardi/werewolves-assistant-web-next:local-preprod-fr` : Pre-rendered app with French language and calling the Werewolves Assistant API running locally (`"http://localhost:9292"`)
- `antoinezanardi/werewolves-assistant-web-next:local-preprod-en` : Pre-rendered app with English language and calling the Werewolves Assistant API running locally (`"http://localhost:9292"`)

### 🚀 When pushing to `main` branch

- `antoinezanardi/werewolves-assistant-web-next:prod-fr-latest` : Pre-rendered app with French language from latest release and calling the Werewolves Assistant API deployed from `main` branch (`"https://api.werewolves-assistant.com"`)
- `antoinezanardi/werewolves-assistant-web-next:prod-en-latest` : Pre-rendered app with English language from latest release and calling the Werewolves Assistant API deployed from `main` branch (`"https://api.werewolves-assistant.com"`)
- `antoinezanardi/werewolves-assistant-web-next:local-prod-fr-latest` : Pre-rendered app with French language from latest release and calling the Werewolves Assistant API running locally (`"http://localhost:9191"`)
- `antoinezanardi/werewolves-assistant-web-next:local-prod-en-latest` : Pre-rendered app with English language from latest release and calling the Werewolves Assistant API running locally (`"http://localhost:9191"`)

When pushing to `main` branch, a new release is created with the version number from the `package.json` file. Then, all above tags for `prod` are also created with the version number instead of `latest`.

### 🔖 Which one to choose ?

For your tests, you must choose the `local` prefixed tags when you want to test the app with the API running locally.

- If you want to test the app with the latest features, you can use the `preprod` tags.
- If you want to test the app with the latest release, you can use the `prod` tags.

Not prefixed tags like `preprod-fr` or `prod-en` are exclusively used for the preproduction and production environments.

## <a name="tests">💯 Tests</a>

### 🧪 Unit tests

![Vitest](https://img.shields.io/badge/-Vitest-black?style=for-the-badge&logoColor=yellow&logo=vitest&color=30420a)

[![Tests count](https://byob.yarr.is/antoinezanardi/werewolves-assistant-web-next/tests-count)](https://byob.yarr.is/antoinezanardi/werewolves-assistant-web-next/tests-count)

[![Covered Statements](https://byob.yarr.is/antoinezanardi/werewolves-assistant-web-next/covered-statements)](https://byob.yarr.is/antoinezanardi/werewolves-assistant-web-next/covered-statements)

[![Covered Branches](https://byob.yarr.is/antoinezanardi/werewolves-assistant-web-next/covered-branches)](https://byob.yarr.is/antoinezanardi/werewolves-assistant-web-next/covered-branches)

[![Covered Functions](https://byob.yarr.is/antoinezanardi/werewolves-assistant-web-next/covered-functions)](https://byob.yarr.is/antoinezanardi/werewolves-assistant-web-next/covered-functions)

[![Covered Lines](https://byob.yarr.is/antoinezanardi/werewolves-assistant-web-next/covered-lines)](https://byob.yarr.is/antoinezanardi/werewolves-assistant-web-next/covered-lines)

### ⚗️ E2E / Acceptance tests

![Playwright](https://img.shields.io/badge/-Playwright-black?style=for-the-badge&logoColor=white&logo=playwright&color=1D8D22)

![Cucumber](https://img.shields.io/badge/-Cucumber-black?style=for-the-badge&logoColor=white&logo=cucumber&color=169652)

[![Scenarios](https://byob.yarr.is/antoinezanardi/werewolves-assistant-web-next/scenarios)](https://byob.yarr.is/antoinezanardi/werewolves-assistant-web-next/scenarios)

E2E tests are written in Gherkin language around Playwright functions and are available in the **[features directory](https://github.com/antoinezanardi/werewolves-assistant-web-next/tree/main/tests/acceptance/features)**.

> [!NOTE]
> 🏞️ Screenshots for visual regression tests for each platform (`linux` / `darwin`) are available in the **[screenshots directory](https://github.com/antoinezanardi/werewolves-assistant-web-next/tree/main/tests/acceptance/screenshots)**.

### 👽 Mutant testing

![Stryker](https://img.shields.io/badge/-Stryker-black?style=for-the-badge&logoColor=white&logo=stryker&color=7F1B10) 

[![Mutation testing badge](https://img.shields.io/endpoint?style=flat&url=https%3A%2F%2Fbadge-api.stryker-mutator.io%2Fgithub.com%2Fantoinezanardi%2Fwerewolves-assistant-web-next%2Fmain)](https://dashboard.stryker-mutator.io/reports/github.com/antoinezanardi/werewolves-assistant-web-next/main)

### ▶️ Commands

> [!IMPORTANT]
> Before testing, you must follow the **[installation steps](#installation)**.

Then, run one of the following commands :

```bash
# Assure you started Werewolves Assistant sandbox API docker containers before running tests
pnpm run docker:sandbox-api:start

# Run unit tests with coverage
pnpm run test:unit:cov

# Run unit tests only on staged files (run on pre-commit)
pnpm run test:unit:staged

# Before running e2e tests, you must prepare them
pnpm run test:cucumber:prepare

# Run all e2e acceptance tests and generate a HTML report
pnpm run test:cucumber

# Run shard-X tagged e2e acceptance tests and generate a HTML report (Every feature file is tagged with a shard number)
pnpm run test:cucumber:shard-1
pnpm run test:cucumber:shard-2
pnpm run test:cucumber:shard-3
pnpm run test:cucumber:shard-4
pnpm run test:cucumber:shard-5
pnpm run test:cucumber:shard-6
pnpm run test:cucumber:shard-7
pnpm run test:cucumber:shard-8

# Run e2e acceptance tests without screenshots comparison and generate a HTML report
pnpm run test:cucumber:skip-screenshots-comparison

# Generate a HTML report from the last e2e tests run (implied by the previous command)
pnpm run test:cucumber:html-report

# Run all mutant tests with coverage
pnpm run test:stryker

# Run mutant tests with coverage from scratch (without using the incremental file)
pnpm run test:stryker:force

# Run mutant tests only on a specific shard of the project
pnpm run test:stryker:components
pnpm run test:stryker:composables
pnpm run test:stryker:layouts
pnpm run test:stryker:pages
pnpm run test:stryker:stores
pnpm run test:stryker:utils

# Run all of the above shards commands one after the other
pnpm run test:stryker:all-shards
```

## <a name="env-variables">🌿 Env variables</a>

Environnement files are available in the **[env directory](https://github.com/antoinezanardi/werewolves-assistant-web-next/tree/main/env)**.

> [!TIP]
> You can create a `.env` file in this directory to override the default values when starting the API locally with `pnpm run dev` command.

Environment variables are :

|                      Name                       |                              Description                               | Required | Default value |                  Limitations                   |
|:-----------------------------------------------:|:----------------------------------------------------------------------:|:--------:|:-------------:|:----------------------------------------------:|
| `NUXT_PUBLIC_WEREWOLVES_ASSISTANT_API_BASE_URL` |                  URL of the Werewolves Assistant API                   |    ✅     |       ❌       |              Must be a valid URL               |
|          `NUXT_PUBLIC_DEFAULT_LOCALE`           |                   Locale used when starting the app                    |    ❌     |     `en`      |          Must be either `en` or `fr`           |
|           `NUXT_PUBLIC_CONTACT_EMAIL`           |                       Contact email for the app                        |    ✅     |       ❌       |         Must be a valid email address          |
|       `SKIP_SCREENSHOTS_COMPARISON_TESTS`       | In E2E tests, skip all screenshots comparisons, not used in production |    ❌     |    `false`    |        Must be either `true` or `false`        |
|                 `NUXT_SITE_URL`                 |                  Used for SEO, base URL for the site                   |    ✅     |       ❌       |              Must be a valid URL               |
|                `NUXT_SITE_NAME`                 |            Used for SEO, name of the site (Used in titles)             |    ✅     |       ❌       |             Must be a valid string             |
 |                 `NUXT_SITE_ENV`                 |           Used for SEO and indexing, environment of the site           |    ✅     |       ❌       | Must be a either `production` or `development` |
 |             `NUXT_SITE_DESCRIPTION`             |           Used for SEO and indexing, description of the site           |    ✅     |       ❌       |             Must be a valid string             |

## <a name="code-analysis-and-consistency">☑️ Code analysis and consistency</a>

### 🔍 Code linting & formatting

![ESLint](https://img.shields.io/badge/-ESLint-black?style=for-the-badge&logoColor=white&logo=eslint&color=341BAB)

In order to keep the code clean, consistent and free of bad TS practices, more than **300 ESLint rules are activated** !

> [!NOTE]
> Complete list of all enabled rules is available in the **[eslintrc.config.js file](https://github.com/antoinezanardi/werewolves-assistant-web-next/blob/master/eslintrc.config.js)**.

### ▶️ Commands

> [!IMPORTANT]
> Before linting, you must follow the [installation steps](#installation).

Then, run one of the following commands :

```bash
# Lint 
pnpm run lint

# Lint and fix
pnpm run lint:fix

# Lint and fix only on staged files (runs on pre-commit)
pnpm run lint:staged:fix

# Inspect ESLint config with @eslint/config-inspector
pnpm run lint:inspect-config
```

### 🥇 Project quality scanner

Multiple tools are set up to maintain the best code quality and to prevent vulnerabilities :

![CodeQL](https://img.shields.io/badge/-CodeQL-black?style=for-the-badge&logoColor=white&logo=github&color=2781FE)

> [!NOTE]
> You can check the **[CodeQL analysis report here](https://github.com/antoinezanardi/werewolves-assistant-web-next/security/code-scanning)**.

![SonarCloud](https://img.shields.io/badge/-SonarCloud-black?style=for-the-badge&logoColor=white&logo=sonarcloud&color=F37A3A)

> [!NOTE] 
> SonarCloud summary is available **[here](https://sonarcloud.io/summary/new_code?id=antoinezanardi_werewolves-assistant-web-next)**.

[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=antoinezanardi_werewolves-assistant-web-next&metric=coverage)](https://sonarcloud.io/summary/new_code?id=antoinezanardi_werewolves-assistant-web-next)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=antoinezanardi_werewolves-assistant-web-next&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=antoinezanardi_werewolves-assistant-web-next)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=antoinezanardi_werewolves-assistant-web-next&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=antoinezanardi_werewolves-assistant-web-next)

[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=antoinezanardi_werewolves-assistant-web-next&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=antoinezanardi_werewolves-assistant-web-next)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=antoinezanardi_werewolves-assistant-web-next&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=antoinezanardi_werewolves-assistant-web-next)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=antoinezanardi_werewolves-assistant-web-next&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=antoinezanardi_werewolves-assistant-web-next)

[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=antoinezanardi_werewolves-assistant-web-next&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=antoinezanardi_werewolves-assistant-web-next)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=antoinezanardi_werewolves-assistant-web-next&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=antoinezanardi_werewolves-assistant-web-next)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=antoinezanardi_werewolves-assistant-web-next&metric=bugs)](https://sonarcloud.io/summary/new_code?id=antoinezanardi_werewolves-assistant-web-next)

## <a name="versions">📈 Releases & Changelog</a>

Releases on **main** branch are generated and published automatically by :

![Semantic Release](https://img.shields.io/badge/-Semantic%20Release-black?style=for-the-badge&logoColor=white&logo=semantic-release&color=000000)

It uses the **[conventional commit](https://www.conventionalcommits.org/en/v1.0.0/)** strategy.

Each change when a new release comes up is listed in the **<a href="https://github.com/antoinezanardi/werewolves-assistant-web-next/blob/master/CHANGELOG.md" target="_blank">CHANGELOG.md file</a>**.

> [!TIP]
> Also, you can keep up with changes by watching releases via the **Watch GitHub button** at the top of this page.

## <a name="github-actions">🐙 GitHub Actions</a>

This project uses **GitHub Actions** to automate some boring tasks.

> [!NOTE]
> You can find all the workflows in the **[.github/workflows directory](https://github.com/antoinezanardi/werewolves-assistant-web-next/tree/main/.github/workflows).**

### 🎢 Workflows

|                                                                                          Name                                                                                           |                                                                                                                                                                                Description & Status                                                                                                                                                                                |                      Triggered on                      |    
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:------------------------------------------------------:|
|                                       **[⚙️ Build](https://github.com/antoinezanardi/werewolves-assistant-web-next/actions/workflows/build.yml)**                                       |                                         Various checks for app health, code quality and tests coverage<br/><br/>[![⚙️ Build Workflow](https://github.com/antoinezanardi/werewolves-assistant-web-next/actions/workflows/build.yml/badge.svg)](https://github.com/antoinezanardi/werewolves-assistant-web-next/actions/workflows/build.yml)                                         | `push` on `develop` and all pull requests to `develop` |
|              **[🔃 Lint PR Name Into Develop Workflow](https://github.com/antoinezanardi/werewolves-assistant-web-next/actions/workflows/lint-pr-name-into-develop.yml)**               |         Checks if pull request name respects `conventionnal-commit` rules<br/><br/>[![🔃 Lint PR Name Into Develop Workflow](https://github.com/antoinezanardi/werewolves-assistant-web-next/actions/workflows/lint-pr-name-into-develop.yml/badge.svg)](https://github.com/antoinezanardi/werewolves-assistant-web-next/actions/workflows/lint-pr-name-into-develop.yml)          |         `pull-request` `created` or `updated`          | 
|                      **[🔃️ Upsert PR Release Workflow](https://github.com/antoinezanardi/werewolves-assistant-web-next/actions/workflows/upsert-pr-release.yml)**                      |      Creates or updates pull request to `main` depending on commits on `develop` since last release<br/><br/>[![🔃️ Upsert PR Release Workflow](https://github.com/antoinezanardi/werewolves-assistant-web-next/actions/workflows/upsert-pr-release.yml/badge.svg)](https://github.com/antoinezanardi/werewolves-assistant-web-next/actions/workflows/upsert-pr-release.yml)       |                  `push` on `develop`                   | 
|                       **[🏷️ Release Creation Workflow](https://github.com/antoinezanardi/werewolves-assistant-web-next/actions/workflows/release-creation.yml)**                       |                Creates a new release using `semantic-release` with tag and updated changelog<br/><br/>[![🏷️ Release Creation Workflow](https://github.com/antoinezanardi/werewolves-assistant-web-next/actions/workflows/release-creation.yml/badge.svg)](https://github.com/antoinezanardi/werewolves-assistant-web-next/actions/workflows/release-creation.yml)                 |                    `push` on `main`                    | 
|                   **[🚀 Deploy To Production Workflow](https://github.com/antoinezanardi/werewolves-assistant-web-next/actions/workflows/deploy-to-production.yml)**                    |                    Deploys app with last tag version to `Docker Hub` and `GCP`<br/><br/>[![🚀 Deploy To Production Workflow](https://github.com/antoinezanardi/werewolves-assistant-web-next/actions/workflows/deploy-to-production.yml/badge.svg)](https://github.com/antoinezanardi/werewolves-assistant-web-next/actions/workflows/deploy-to-production.yml)                    |                     `tag-creation`                     | 
| **[👽 Run Stryker Mutant Tests and Push Incremental Reports Workflow](https://github.com/antoinezanardi/werewolves-assistant-web-next/actions/workflows/push-incremental-reports.yml)** | Runs Stryker mutant tests and pushes incremental reports<br/><br/>[![👽 Run Stryker Mutant Tests and Push Incremental Reports Workflow](https://github.com/antoinezanardi/werewolves-assistant-web-next/actions/workflows/push-incremental-reports.yml/badge.svg)](https://github.com/antoinezanardi/werewolves-assistant-web-next/actions/workflows/push-incremental-reports.yml) |                  `workflow_dispatch`                   |

## <a name="misc-commands">✨ Misc commands</a>

### 🌳 Animated tree visualisation of the project's evolution with **[Gource](https://gource.io/)**
```shell
# Please ensure that `gource` is installed on your system.
pnpm run gource
```

### 🔀 Create git branch with a conventional name
```shell
pnpm run script:create-branch
```

### ⤴️ Create pull request against the `develop` branch from current branch
```shell
pnpm run script:create-pull-request
```

### 💠 Check that all acceptance features have an associated shard 
```shell
pnpm run script:check-acceptance-features-shard
```

### 📸 Download all screenshots from the acceptance tests from a GitHub action
```shell
pnpm run script:download-acceptance-screenshots
```

### 📣 To all IntelliJ IDEs users (IntelliJ, Webstorm, PHPStorm, etc.)

All the above commands are available in the **.run directory** at the root of the project. 

> [!TIP]
> You can add them as **run configurations** in your IDE.

## <a name="license">©️ License</a>

This project is licensed under the [MIT License](http://opensource.org/licenses/MIT).

## <a name="contributors">❤️ Contributors</a>
> [!WARNING]
> If you want to contribute to this project, please read the [**contribution guide**](https://github.com/antoinezanardi/werewolves-assistant-web-next/blob/master/CONTRIBUTING.md).

Thank you to all the contributors:

<table>
    <tbody>
        <tr>
            <td align="center" valign="top">
                <a href="https://github.com/danielroe">
                    <img src="https://github.com/danielroe.png?s=75" width="75" height="75"><br/>
                    Daniel Roe
                </a>
            </td>
            <td align="center" valign="top">
                <a href="https://github.com/manniL">
                    <img src="https://github.com/manniL.png?s=75" width="75" height="75"><br/>
                    Alexander Lichter
                </a>
            </td>
        </tr>
    </tbody>
</table>