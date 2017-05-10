'use strict';
let startX, startY, parentWidth, parentHeight, startWidth, startHeight;

const Resize = (e)=>
{
    startX = e.clientX;
    startY = e.clientY;
    parentWidth = parseInt(document.defaultView.getComputedStyle(e.target.parentNode).width, 10);
    parentHeight = parseInt(document.defaultView.getComputedStyle(e.target.parentNode).height, 10);
    startWidth = parseInt(document.defaultView.getComputedStyle(e.target).width, 10);
    startHeight = parseInt(document.defaultView.getComputedStyle(e.target).height, 10);
    document.documentElement.addEventListener('mouseout', stopResize, false);
    document.documentElement.addEventListener('mousemove', doResize, false);
    document.documentElement.addEventListener('mouseup', stopResize, false)
};

const hor_Resize = (e)=>{
    startX = e.clientX;
    parentWidth = parseInt(document.defaultView.getComputedStyle(e.target.parentNode).width, 10);
    startWidth = parseInt(document.defaultView.getComputedStyle(e.target).width, 10);
    document.documentElement.addEventListener('mouseout', stopResize, false);
    document.documentElement.addEventListener('mousemove', doHor_Resize, false);
    document.documentElement.addEventListener('mouseup', stopResize, false)
};

const ver_Resize = (e)=> {
    startY = e.clientY;
    parentHeight = parseInt(document.defaultView.getComputedStyle(e.target.parentNode).height, 10);
    startHeight = parseInt(document.defaultView.getComputedStyle(e.target).height, 10);
    document.documentElement.addEventListener('mouseout', stopResize, false);
    document.documentElement.addEventListener('mousemove', doVer_Resize, false);
    document.documentElement.addEventListener('mouseup', stopResize, false)
};

const doHor_Resize= (e)=>{
    e.target.style.width = ((startWidth + e.clientX - startX) <= parentWidth) ? (startWidth + e.clientX - startX) + 'px' : e.target.style.width
};

const doVer_Resize = (e)=>{
    e.target.style.height = ((startHeight + e.clientY - startY) <= parentHeight) ? (startHeight + e.clientY - startY) + 'px' : e.target.style.height
};

const doResize = (e)=>{
    if ((startWidth + e.clientX - startX)<=parentWidth)
    {
        e.target.style.width = (startWidth + e.clientX - startX) + 'px'
    }
    if((startHeight + e.clientY - startY)<=parentHeight) 
    {
        e.target.style.height = (startHeight + e.clientY - startY) + 'px'
    }
};

const stopResize = (e)=>{
    document.documentElement.removeEventListener('mouseout', stopResize, false);
    document.documentElement.removeEventListener('mousemove', doVer_Resize, false);
    document.documentElement.removeEventListener('mousemove', doResize, false);
    document.documentElement.removeEventListener('mousemove', doHor_Resize, false);
    document.documentElement.removeEventListener('mouseup', stopResize, false)
};