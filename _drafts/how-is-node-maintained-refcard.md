# How is Node.js maintained and improved on a day to day basis?

It is not uncommon for people to believe that one or more of the high-level Node.js groups manage the day to day work on the project, so let's address those first:

[The Node.js Foundation Board](https://nodejs.org/en/foundation/board/), which is made up of corporate members representatives, a Technical Steering Committee representative, and elected individual membership class representatives, **does not deal with the day to day work**. Instead, responsibilities of the board are primarily:
- set business/technical direction
- oversee intellectual property (IP) management
- marketing
- event planning

[The Technical Steering Committee](https://github.com/nodejs/tsc) (TSC), which is the technical governing body of the Node.js Foundation, **does not deal with the day to day work**. It admits and retains oversight of all top-level projects under the Node.js Foundation's purview.

[The Core Technical Committee](https://github.com/nodejs/ctc), which is in charge of the ongoing maintenance and evolution of Node.js as well as driving the project and community forward, _does handle day to day technical decisions, however only when they need to be made_. (See below for more information.)

**Primarily, the development work done on Node.js core is governed by a distributed consensus model, managed by a group of [collaborators](https://github.com/nodejs/node#collaborators).**

The process goes roughly as follows:
- a pull request is made against the repository
- if more than a single collaborator agrees it should be merged, it will move forward
- the PR should land within 48 hours (72 if during the weekend)

The only time a decision goes to the CTC is when a consensus cannot be reached.

The [release schedule of Node.js](https://nodejs.org/en/about/releases/) loosely follows these guidelines:
- major semver increments happen bi-yearly
- current releases can happen weekly or bi-weekly
- LTS releases fluctuate based on needs; typically, early in the LTS term, releases happen every two weeks but it slows to a monthly pace. (Only even numbered releases go to LTS.)

More details can be found in the [Collaborator Guide](https://github.com/nodejs/node/blob/master/COLLABORATOR_GUIDE.md).

