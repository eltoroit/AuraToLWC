# Steps

## Create Aura component

1. Create project
2. Update .gitignore
3. Create git and add project
4. Request Trial Dev Hub
   1. https://developer.salesforce.com/promotions/orgs/dx-signup
5. Authorize DevHub
   1. sfdx force:auth:web:login -d -a dhTDX19_A2W
6. Update config/project-scratch-def.json
   1. "s1EncryptedStoragePref2": false
7. Create a scratch Org
   1. sfdx force:org:create -f config/project-scratch-def.json -a soTDX19_A2W -s
8. Create Aura Component
   1. sfdx force:lightning:component:create --componentname AuraHello --outputdir force-app/main/default/aura
   2. Copy code from slides
      1. Markup
      2. Controller
9. Push Aura component to Org
   1. sfdx force:source:push --json --loglevel fatal
10. Open Scratch Org
    1. sfdx force:org:open
11. In Browser...
    1. App launcher > Service
    2. Home Tab
    3. Setup > Edit Tab
    4. Drag component to page
    5. Save
    6. Activate
    7. Assign as Org default
    8. Save
    9. Back
12. Pull Changes
    1. sfdx force:source:pull
13. Git it!

# Create LWC

1. Create Lightning web component
   1. sfdx force:lightning:component:create --type lwc --componentname lwcHello --outputdir force-app/main/default/lwc
2. Start changing the code...

#### `<aura:component implements="flexipage:availableForAllPageTypes" access="global">...</aura:component>`
**lwcHello.html**
```
<template>
</template>
```
**lwcHello.js-meta.xml**
```
<isExposed>true</isExposed>
<targets>
  <target>lightning__HomePage</target>
</targets>
```

3. Push LWC component to Org
   1. sfdx force:source:push --json --loglevel fatal
4. Update page
   1. Setup > Edit Tab
   2. Drag component to page
   3. Save
   4. Save
   5. Back

#### `<aura:attribute name="greeting" type="String" default="world" />`
**lwcHello.js**
```
import { LightningElement, track } from "lwc";

export default class LwcHello extends LightningElement {
  @track greeting = "world";
}
```

#### `<lightning:card title="Aura_Hello" iconName="action:announcement">...</lightning:card>`
**lwcHello.html**
```
<lightning-card title="LWC_Hello" icon-name="action:announcement">
</lightning-card>
```

#### `<lightning:button label="Count" onclick="{!c.count}" />`
**lwcHello.html**
```
<lightning-button label="Count" onclick={count} ></lightning-button>
```

#### `count: function(component, event, helper) {...}`
**lwcHello.js**
```
count() {
	alert(this.greeting.length + " letters");
}
```

#### `<aura:set attribute="actions">...</aura:set>`
**lwcHello.html**
```
<lightning-button label="Count" onclick={count} slot="actions"></lightning-button>
```

#### `<div class="slds-m-around_medium">...</div>`
No changes needed

#### `<p>Hello, {!v.greeting}!</p>`
**lwcHello.html**
```
<p>Hello, {greeting}!</p>
```

#### `<lightning:input label="Name" value="{!v.greeting}" />`
**lwcHello.html**
```
<lightning-input label="Name" value={greeting} onchange={handleChange}></lightning-input>
```

**lwcHello.js**
```
handleChange(event) {
	this.greeting = event.target.value;
}
```

5. Push and Git it!

# Create new Scratch Org
1. Create a scratch Org
   1. sfdx force:org:create -f config/project-scratch-def.json -a soTDX19_A2W -s
2. Push original source to Org
   1. sfdx force:source:push --json --loglevel fatal
3. Assign Permission Set
   1. sfdx force:user:permset:assign --permsetname Hello_World