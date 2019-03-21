export default (async function () {
    await import('./firstLevel1.js');
    await import('./firstLevel2.js');
})()