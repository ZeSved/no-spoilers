"use strict";
// setInterval(() => {
//   document.querySelectorAll('ytd-video-renderer').forEach(item => {
//     (item as HTMLElement).style.opacity = '20%'
//   })
// }, 2000)
// const btn = document.getElementById('no_spolier_btn')
setInterval(() => {
    localStorage.setItem('ee', JSON.stringify(document.getElementById('no_spolier_btn')));
}, 200);
window.addEventListener('click', (e) => {
    localStorage.setItem('eee', 'mm');
    if (e.target.id === 'no_spolier_btn') {
        localStorage.setItem('e', 'm');
        console.log('eeeeeeeeeee');
        document.querySelectorAll('ytd-video-renderer').forEach(item => {
            item.style.opacity = '20%';
            console.log('works');
        });
    }
});
// btn?.addEventListener('click', () => {
//   console.log('eeeeeeeeeee')
//   document.querySelectorAll('ytd-video-renderer').forEach(item => {
//     (item as HTMLElement).style.opacity = '20%'
//     console.log('works')
//   })
// })
