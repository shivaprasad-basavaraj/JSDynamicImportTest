export default (async function () {
    await import('./secondLevel1.js');
    await import('./secondLevel2.js');
})()