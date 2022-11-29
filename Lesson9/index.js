<<<<<<< Updated upstream
=======
// const ITEMS = [
//     {
//         id: 0,
//         title: 'I will wake up at 8 in the morning'
//     },
//     {
//         id: 1,
//         title: 'I will code at 9 in the morning'
//     },
//     {
//         id: 2,
//         title: 'I will eat at 12 in the morning'
//     },
//     {
//         id: 3,
//         title: 'I will sleep at 13 in the morning'
//     }
// ];

// const list = document.getElementById('todo-list');

// function createItemList(item) {

//     // create img element
//     const img = document.createElement('img');
//     img.style.width = '24px';
//     img.style.height = '24px';
//     img.alt = 'icon';
//     img.src = 'icons8-trash-can-48.png';

//     // create img wrapper
//     const imgWrapper = document.createElement('div');
//     imgWrapper.classList.add('delete-btn', 'center');
//     imgWrapper.appendChild(img);

//     // create span 
//     const title = document.createElement('span');
//     title.innerHTML = item.title;

//     // list item element
//     const itemWrapper = document.createElement('li');
//     itemWrapper.classList.add('todo-item');
//     itemWrapper.appendChild(title);
//     itemWrapper.appendChild(imgWrapper);

//     list.appendChild(itemWrapper);
// }

// ITEMS.forEach(item => {
//     createItemList(item);
// });
const ITEMS = [
    {
        nation_name : 'United States',
        flag : "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
        population : '330 millions',
        continent : 'North America'
    },
    {
        nation_name : 'Canada',
        flag : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAkFBMVEXVKx7////TGADrq6nSAADVKRvUJhfUIhLTDwD55eTUIA/UHQrTGgDUJBXUGwXUHw7fbGbtsq/99/f77ez219Xut7Tzzcvlj4vifnndYFn109HbVEzom5fqpaH44eDhdnHxxcPaTEPZQzncWVHYOzDli4b98/PWMSTZSD/nlpLjg37gcmzeZmDmj4rXPDLpoJ3i5xrcAAAHrklEQVR4nO2d63qqOhCGSUwgAoLiuZ5bq7a17f3f3Ta1KmqAkKTulcP3a3WpQ3ifgQmTYeJ5SgUb4J9WA6o9X8Vy+KTk8EnJ4ZOSwyclh09KDp+UHD4pOXxScvik5PBJyeGTksMnJdX4mk219izDNxqptWcXvi5CXaUG7cI3SlO17mcVvi7yPLXuZxW+Rep56UKlRZvwNRE1iVQGX5vwLUJqMvxQaNIifEfnU+t+FuH7CI82VbqfPfjm6GQUzZUZtQdfOzgZDdrKjFqD7+J8Kt3PGnz74GI12Kuyagu+HsqbRT1FZm3BNw7yZoOxIrOG4rv1rmvnY7ifoDsaim8xvs4MvLSu7bZerj7ujgWfhA3F10HoM7v8+YRuDaOn3LeHCHUcvpx6xIuDC5Jb57tyv34LesRdvHllxPMwWf1CuXe+g/sNfkGvCPY8khXbshAf2PmHX/voY0P/mNw538H9JvSTzQLRz/yd4GFMxTc65gdSNM3AlLBMkynIpij9+XcomsI3Fd/5vGIIE7btBMJY2WH+TQmf1xPT44pEnqotWoUvY0SLYiHByGEsPrDG/EfBa9GjGIvvI6i2flIgnH82Ft+sxonBmcN3o0GN2EEGDt+NujVih3jlgbH4QMQdO3AkfBBz8bW5Y4fE0pG5+KYFDxv3SqYO352W3LGDLB2+O3X58YnXrJmLD/icsQP74scwGN+YkeVjqSWx7GYSvptnh7eI7xjRW6kZW/ANbtZ7eGPHTeTooBrPIAbhGweon/+7yfnccV3v10d11tDNwUdpoStH4osdGOd/s0S16ifNwfca0cW1/ILj/fIkS1cr5j267Ba9Go1vwzqRLKG+hkmu9mzIFTui4eUXc/JjJGEmn1mH1RFfB7W/B7cn0zmeCI4vc+A+17nByw2zG/vso24GszazEEFHfBkJYkK2o0Yv5yXr45l7Pj6DnXPFjkut5MY72cgl77NeZ7QmJA6YK+k64juWOuIQknj12j/e5y+zlNb6fJ583ncG9XW+V/7OZZr94SoiMKVXNLukUkt8l6vSjyDyx9NlI71E2fBcMjDxq4/gT07f3oXn/8RhYzkd+whG5+gN+6yRaInvehUStxIC83OU6ETkPa0+Qvp+Yp0PNBiSpHU172GvZWqJr+pxNvm90DocJwd/I8K+PD1Y8GCsJ74qLvBY7djjeGz7nSkuqiyyCwD1xLepiqnkeElyhF7088XXKtCIOdnUFB+z5OxKhKZRmjzeRyP3W9UXWxP2ODTFVz1sNOzOdzyRdzfvDiu9VHwc/6uKhs2RiY8I4aB34EdI9cNdUT5fU3xcUzp18guuXW3x1SlhUTCMogy0rvh4c6FqVJgB1BUfWD3w6vVXRaPQFt93XP1rVYq/jcP3yKu3OHuvLT7w/LCr138uHIS++PhLgGSVFF67GuNbPmzksLiESF98o7D652pU8s6RrviaVRkmpaNYmDXv67XRw3yPKkR79hurOuIbvKAaL22oUYAmrNIX/fD11oSz8kytWmR774H64QNvqMb7VuqE0dv9WDTEB5boodmqo3zEmr7oiA80txwrkGqVbpnBV0t8AIxrva4rL1JQ86cpPvD52HxfUcmarvhA/3EBBCNmgYbW+MA8eNDkLwiK+9Xpiw9kk4eMHU5K3tTXGB8A7w+4AaL3shFojQ90/voGiFH5APTGB3rxn94AW7CiQ4nm+MBm9YcnEO/YhUHm4ANg8WczaFLd1E9/fGD2NzdAjIqXOEzCBwZ/kcFqcbXXMAEf6H5xvjzJr+iL6x1pI/AB0FZ8AySc3SEMwac2h8rMjBqNDyz5iiF55PP3hjAGn7ocarrlb2lvDj5VOVT4UqOZn0n4wKuCFEJhZtR8fKAvewMsyYxagA/MQ6kUQpDWbH9tGD6QTST4Bau6PUxNwwfAVngCKNDC1Dx8PG+hspWWJpYtwcfzJhZbAq3XjcPH18CArfpbQBmH702i5DnhfdQ1Fx9v2zmW6reiMw1fSa96fPePO9XuXW8avhEr7vohJAiujwW9IVpDRGDIijC19442DR+8di0/SAgiq9Fs0D1MqT8O98Xk4zA17g5mo9XhgyS4hohh9RFMxnfphoNbESTkqz1d5sLps59/Q2i+nLafIYHRpeVI3S6whuH76S/kpwdw+OWz37t9Bpsmd28IZb3+5wsmBKbUEetuv2gWvg2KCUHPo8aAvdAzi2P2i83dp8b7ihwgFnTMsANfZz9dlvUuPHhfWYvr5vJ7X2/DNrPwVWkY5bv1KZBd+EZp7alJuezC1w4U7gxNZRe+cUumxzVDduGb+IUdWcRkF76dL7ydIlt24Vtj8T3FmLILH8bYU2rQKnwZTRmIbgjIlF34iPhOvGxZhY82naz5UFshq/A16/Xz55BV+GgrWNFdyNmyCh9dCBHeipcpq/DRXLT4fpQs2YdPfFM2hqzCR7tlF/SvFpRV+GjDU/G9eFmyCh/tWSexISVDVuGju++ozdZbhY+W/gkU8ZXIKnx0u3fxbdxZsgof3eZDbbbeKny0U7vabL1V+Giz3ZI2uAKyCt82DYJ0q9KiVfja+4OULvRahU+9HD4pOXxScvik5PBJyeGTksMnJYdPSg6flBw+KTl8UnL4pKQa33+mUo7SKNs+0AAAAABJRU5ErkJggg==',
        population : '38 millions',
        continent : 'North America'
    },
    {
        nation_name : 'Japan',
        flag : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAflBMVEX///+8AC23AAC7ACe7ACm4ABW5ABu4ABC6ACO5ABm7ACi4ABO6ACL46u3sx83NYXG3AAfnvcL14OTiqLH78fPKVGbEOE/9+PnGQFbjrbX35OjnuL/x09jsxszpv8XfoarSc4HXhZHAHj3CK0bbkJvQanm/DzbUeYbemqS/FjiKuKh1AAADpUlEQVR4nO3diXaiMBSA4QJCUFxwQ63WurTavv8LDtSZozZxipiQE/p/D+Dh3hOTS8jy9AQAAAAAAAAAAAAAAAAAAAqT3uplPRwO1y+r3sT2w1g3679usiBMRRIWEpGGQbZ57f/WzMz6272fRN1Oy7vU6nSjxN9v+zPbD1i74aAtutfZuMpMV7QHS9sPWafVMUnim/n4Jw6Tzcr2o9ZkPfe7PybkpOtna9uPW4PlTgQlM1IIxK7pf6H+TtzuRNRaYte3/dgG9ab+vRn5yoo/7dl+dFM+xM8dq1qcfth+eCN6WVIxI4Uka2BTWST3dK2yQCxsh6DbMX0oI4V0YzsIrWbz9sMp8bx21qB6v/dZtkj7v/izMZ3KKHqsKzkLopHtYPQYJVWKErWWaERSRqG+lORJCRuQlF6kMyV5UiLn+5SZ19GaEi//PddHn6xqOX9bnNkO6jHvkfaUeF70bjusRywer15V0rHtwKp79o2kxPP8Z9uhVbbXVat9F+xth1bVW2goJZ4XvtkOrhpj/5yC72bpNjf1zykEc9vhVbEUBlPiecLF6XxPb03/XetgO8D7jc11sCehe0VKbLaZ5A0lth3ivRamm0neUFybtN6ZbiZ5Q9nZDvI+fTMvOtdSt76ZDvRPEcjige0w7zGpo5nkDcWlNV5jHZ9zftZ2aTg2WtafuVTgT0y+/V3y3fnzLM0XJyehOy8973WMOoXYnZlZw69/Zy3PdqhlPdczEhdSVyZma+tOHOpQtnpWVpTR3doOtqRpPdVJIZ7aDrakQ11drEOzbXVVbAXfdrDl1DjsODPwrMxO2F8TbuzcWNc3FOeDsRv7Nhb1TBSctN2YlK1p8uRvTtyYQhmbWIdzS0ROyEmDckJ/ImHckVGfyKhjZbzvKPBeLGP+RMY8m4z5WBnz9jK+7yjwHVDG92IZ6wpkrD9RYJ2SjPVsMtY9KrA+VsY6agXW28vYl6HA/h0Z+7wUDM+2OTPDdsnwvtHUnVedC+wvlpndh+7MZNI1zitQ4FwLGeefKJg6J8e5CvbSxsh5ShvbYT2Gc7dks4PufrZzcP18Ns7xU+G8RwWt54ImjUgJ58cqcc6wAudRq+g4t/xoOwjdlnddHSILnDx87Afcg6DywH0Zopn3ZTxxr4oa9++ocE+TCvd5qayOYbl7345u7LrQ5Ot+wNtH33d+3f2AJ8U9kuLmPZIvzarjy7t13+hvzccZ99ICAAAAAAAAAAAAAAAAACD7A+PaSTdtOrdEAAAAAElFTkSuQmCC",
        population : '126 millions',
        continent : 'Asia'
    },
    {
        nation_name : 'Mexico',
        flag : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASkAAACqCAMAAADGFElyAAACPVBMVEUAaEfOESb///8AWC7KAAD5qlEAAAD6+vj8rVKQRiD6+vcAhImOQx2NRSDMzq4zAADu7+ecoWjwwjvNz7Wan2MAfYLnlkmfpGyPlVTb3t/MmlvYrGzv8fKpbD07KCCWSSA9JhktIhyCPBpsOSChb0JLKRTo6OEAFx+DQiCKNAAmIR3jsxm4uZGbVixsSC5FIQ1mbRLDxa9zcG5aLxagoaFOLh4AY2SEikUvw93ei0Rnb3nb3c6Jj0htcyyQlVrSzs2gh4GpnJm/ubnXyr3LtaeSRgDCjVCxdTyXeG60gD+bYji4gEt+MwCvl4+cd0pvMxbAsZ6TTACnZxm3eTKJYTd7VEW0lnPmxJqwfl+mYQB/Xz7Xs40XHiDg0ayxg1myd0W4j1nIkU2RdU5AOCz+3a8wEw8QDhd9UDDajFumYCOFhoawj1yhWSjKil61b01ZMR2OWiWBaEX878nv0ZD93439zDWzt4TFq0rBhRjhr0qionnTuVXgtCtsUTjyyGKRbipgJABZRS2HfXBAEgCUZUxnUEQpBgC5rYe9k4PaxIxtGQCMUjhJBQDZvnFOKgy7qKD95ewiDQ3zn5zsYBPvhCZqWSiSYCbyeWX0epKagCxXRj/0o5zxTmr4qLTQnSdmNwDD3dunhBJCR1P6wMjAdIRXrK6Aqqlfjo/0iJiGsrFFZ2QAOzj0xraPb33FZ3ptiIb9xhM1MR19rszG2ec8lLyl0ubYfUXisZVnu9g1latYfY2toEV/qJbZWmNOjXZ+spsHAAAMpUlEQVR4nO3c+1cTVx4AcPdWCAwJ5gWZJJNkyJAwwoQkhMnITpPUoEESJS6ktiJvtDRINzRIXEPEZ6sUUXRdbF1qrTbEuN21q6WtfezftvdOsC+Fbvccf8nci4dMkpk5J5/z/X7ne28Gt2176eMV8PLH9j+89PHyobAUlsJSWApLYSkshaWwFJbCUlgKS2EpLIWlsBSWwlJYCkthKSyFpbAUlsJSWApLYSkshaWwFJbCUlgKS2EpLIWlsBSWwlJYCkthKSyFpbAUlsJSWApLYSkshaWwlCylQq/te2132Iilth5U5569JpMp0rXXvi+MpbaA6o4Mu8xwRGPDU3v3H6Cw1CZjj6mnNV5tsVgaGVfUUm3bvxtLPT8OEp0g9KfevgTPKJVKFdOojCljO18PhX6zZMlLqpM69MabFKxTbx7u606pVIy1ie9XDqtska7fTEG5SCnQrz2dnVGTq7vviKgOHe5q7FdWqwaaaT4RNff07MFSiElnGEQPQyOm4Uh0xDQ6OkZ19vbGYDBZ6QbanWgeN+/ch6WAorZWdxQ+Hhw1R0ys2dzVNXasEhzuTpjsDG21N070pKxvTVgWFbKX4mo5pxrm3ujbI0x1IpEwdSUZ32Rvb3IEpZ9VNdLksPNNx6del72UIaMDOiLU986f99tT7FRXV3cyybpXuqZHXCpVM83Y3m1wqPimia0TUA5StZkMpwZH0kfeHDoSZW3dLlNfUsnSvV09LpZpcLCW/jikSjUnprZqrOQgpeM4p3MmfWJWm5vVvsYOT42aYlPTrX29sajS1tBwtd9ug1TVjnHXzi26KjlIiRkDdzI935Lr/ssp0Rkx95lNY+OtTX0w+1iVlWYam1gbY/WpHCnbFqVKDlKEPps9mT45l8t1AvCGecSUMJ+2uppWEhEla6Ubx1r5AUblo9k43bM3LGspoFATzvlT3FzLAgBHIpZIz4TNqmrojylVttYB9l23ymGtVvGO6lSrjZG3lKT1xsHsqTlARcyWWKOlmlb5XMrqeGqiJ3rOCmsUb4vT8UY3uzMkeykAvNkzl8ARk9lkig3bfVbWp6qGPUIjr5ygUy73aYvPHUv5Nq9U8pHyctwZQjF03HzcbDldnWqmaRVD9x8bamItE8yIZcK1qLIk3KpNg6rMpcRnG0Q2wwVho56YGPOZTvPTAzztiPO06/hEv2/IrHJFjg+3nh5K9EeVE7KUWmrJzUuzOTHLwaYKTv2Sw0O2kYRtuoF3OBqYuIW3WybsptPvRhzjXexbSX5sxMW/eAGm3KVaFjgYVyJ0gm06ACsWs8VmtrimaYeDp/nGVpY1jUQjE8em43Qk6ehmfe7rm6RfeUsRgzNLcHoMgoZMFj1XrERNEaUpBqfIDppuoBk2WR2NHRufcvcn3T3JeE8yZTnbLkcpNHS1OidXmy09ORSDExmTuWtF5WuO846UPWmLtk5ZYyq6O34uqRrv87H2NvlK1YrBzMHSk3BXt6lvxdw93cDAppxu7DJ37oyPJemV+LkpN2OjE3FeZZWplAJCidlLG1JUb9LcnThn8tF09FzUF+s5DzoXP5g8cOHi2fdY+qJ94D236n2ZSom1HHByl85suB3iXeaouzlKu3sYk2vYet0IwGUGHJjc17bnbLvyGLWDla0UVwtAJtPbvbAwdwrO+3armNY4fTqaYmKNE+82XEX1e9EI4lSr84Pw4hWwg5Vr9ok6nQ50ct29fTmttmUJXL46RTf6fD3xkZhp5Lr1LKrfzvPgovF14/72y1DKPiknKVEU0EMatVCwTnFAvHT48F9yuVyLonM/r6KHLe5I1Hyup5n3vYd2bA+Fdl9rt08euAIuXNjop7xqOUgFPRx6WELfyBC6DOoRCIXa6J1vEcHlRErVahpme8wDbjqVcp9HeyrApLHtYtueK5TjfdSiq4HCU1v+Ul5vUC9KM76l5WX4+xKXIWCcfVEpdvfNOY8MjbjZqLnx+oCPTjl8qau8tCRMKdqu3Q5doW7vKOWs6Mlw5S/lEYKklDs3/noTRZXeIIJ0S+5v2r6VOzOXu2LVA8z4ad8Az/sYhqc/2XFNOixsfF+xw9jmRttqkgtoAmKZSznVQdJASFA3b30IpKDyOmGRmtXe+Sg3M2gyTU03MU0M3cz4GDbF09M7zpeObANtxrbbUkyRwaBGqC1zKRhSpIFEVMt/v7/6MXoFzmZOarUfzWpz2jt9EZOll6YZK2ONMyzL+1INK5/wTimqYGlvbytJCZqgoCtzKeANCPqNC9fq6g9321H3Wbv0aeW9wZx46tRoX+9UUjnAxBmVg4VaMAVpxrcjDPduRxdBSUodEDSCnih3KUilIWbSaOv+6mf5fBGtd3qNITADQOgym+zdu3encdxezbK0tcEKoyreMC1lIIwpY0kKeGFc/rJNKEeptJrj0i2lz1kHR35N2qScC1K47F3cbfyAovb7eKvDStOQyhGnHRNXW2EGTlJh1HimjyqEX175ylNq8Is0lxaltU5jXQ2kKjxC2zdv3lp+tgvsmRSVVxtoq/u2m7ZDKr515SrMQCPsq5DUnDoLjpZ/TIH0wtLChoi/UFeoKRQQzYMHby//fK/2C26argy1uWmWh5XK+omvsh0QG6tTSyeXltLlLwXD6lkrFPbXwLBaM64Vi6sf30d2P916YN194UxYAcbdx+yOY2fP3rvXDmaWNt4TiV+fskylYI+9cd/YQxRV+bV8Ib+6+hnsxMP/KBpD0oSFcM58ekerBtRk+Pbt9skQIG59XgpFgtMJvz5juUplggFRKIVFyO/3F2C1qvnnv4oF8GgNRhesW1T7bEsup9XmWn4qR/eljh62rgF9QA9EWcyQNQa9kPV4S0+MlHENpqC/pqYmX5dHZoW1tXuVOdiGwsY9p/0C3QMKHinuf/jhzVsoojx6QTBwcrj2wcyqNZCBn7XYd+v8eViuUGg9RFQ1+cJa4c7sd/5CoTCbqwyBcDFft7r84AYq+V5BEwiS5K8LVXlKAT2nCQa8P85wQ+GCv85f44dGNQgMxld+4N85fxGm4sPCZLuxABFXpZkPABwpBDTPtVPlKqXTQylPqdIQ0oKesQ39HUMBph7Cgv8ePlzLI7Z8IWQsFiHft+GNY8lAUCCdMpEChM5ACkCLUig9n56RXjM+fgIvhagXranz1xXXpNiCfWlxDaVmTU2hdEkkBCH4fEiVrZRCp9Nk06VifeLE/K51+PgY/lDhNZSIj4z5Yh6lItyG4YR6rroChRqLlqNAIF8AVbZSaBgUG31k2vnNLmil+PLxM0cApWBPWijeVVBrfn9dnd//7Ev2BUA+33aWtVRaK2pmRLDRKqzv2rULchlBZ/3XnZ93fn6tmH9UFyrNbkJU6AmlkO5wgdWJmBNfcLaylmoZHOSy2aD0uSkKUcGx/k59R31FR9UoLE0Pv6r4WtqVSp84sRGGwKnTDeZmZCWFhkgKHmdQAajHj5+WpHYVqiqqOqo6RmFtGquoGHryZB2G2uy8NBsmBI5DX8mo5ZV90kdXGwQv7NWhFFUy2XWoqqKior6jqnFxsaOqag0l5TqVlqDUgWAgoK9Vv/hc5S1lMARJTwDdEVSaL6+XpKo6Kurrq6pgdO2GUGD9ifSmAkIFDRrPiwKq7KXUXMYAeyMdkOIkrYZB9bSilH7wB26hnPySekwBggBeUtAbNIJ+k3OVtxQQdbVwbiKAFthYzatnoEs7iqaKepiAFVX19QdQ8j2GzcPSPJrvQVbyxVe+spdykmRGLwTUsGITM/PwkkZ9XfWVdPGrr+qo/6rq0JNne84AEplmNoMqdymgFoFB1GUHf1rpNX7z9Ntv/yiNp6jbVHuz6KbZOc4riuot/my03KWkcJkf/G5QVHu83tKS1ZP1jYEWir0eUhP0is7M/JbnkIWUer5FDbKeYNbjDXpEZEWA78GN0ptej54MBIRXOaA4tbWVDKRQi2AQyCCsQgEB9gyGIEduAz8cMnCimBWgE2nQoEU/9SaNlJykAOHUAY7kNKQ+SGZENcdBqUs6QgySggBbqGBQo/uNM8hFCqC1PVFNGnSvigpDlvj+P2D7shPycK/qg4JAbtaXy1IKoO8hCIij01HbiuCHB9tvgKwTiHrIt/V/lCBDKbAxqXlFvbyduQs+3r7840tY6kXj7l2w/T6xbVtx+f7vOUyGUnAgIuPd33eMPKX+n4GlsBSWwlJYCkthKSyFpbAUlsJSWApLYSkshaWwFJbCUlgKS2EpLIWlsBSWwlJYCkthKSyFpbAUlsJSWApLYSkshaWwFJbCUlgKS2EpLIWlsBSWwlJYCkthKSyFpbDU/zD+Cy6bgDAMODlEAAAAAElFTkSuQmCC",
        population : '130 millions',
        continent : 'North America'
    },
    {
        nation_name : 'England',
        flag : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAFVBMVEX////OESTMAAPtvb/uwcPNABXhjZHwlm9FAAABiUlEQVR4nO3asQ3DMBAEQVqk1H/JdgcTPgTvVHDY+Naata8PXHt44rQSUYmoRFQiKhGViEpEJaISUYmoRFQiKhGViEpEJaISUYmoRFQiKhGViEpEJaISUYmoRFQiKhGViEpEJaISUYmoRFQiKhGViEpEJaISUYmoRFQiKhGViEpEJaISUYmoRFQiKhGViEpEJaISUYmoRFQiKhGViEpEJaISUYmoRHSc6Exv3KPOcyvR/ZzZjeuaxUK/RsMTlyf+uxJRiahEVCIqEZWISkQlohJRiahEVCIqEZWISkQlohJRiahEVCIqEZWISkQlohJRiahEVCIqEZWISkRdsKgjH01fLd9wBx3WqZhKRCWiElGJqERUIioRlYhKRCWiElGJqERUIioRlYhKRCWiElGJqERUIioRlYhKRCWiElGJqERUIioRlYhKRCWiElGJqERUIioRlYhKRCWiElGJqERUIioRlYhKRCWiElGJqERUIioRlYhKRCWiElGJqERUIioRlYhKRCWiFyT6AlXQRZ39U6PdAAAAAElFTkSuQmCC",
        population : '55 millions',
        continent : 'Europe'
    },
    {
        nation_name : 'Poland',
        flag : 'https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/1200px-Flag_of_Poland.svg.png',
        population : '37 millions',
        continent : 'Europe'
    },
    {
        nation_name : 'Brazil',
        flag : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png",
        population : '214 millions',
        continent : 'South America'
    },
    {
        nation_name : 'Australia',
        flag : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/255px-Flag_of_Australia_%28converted%29.svg.png",
        population : '26 millions',
        continent : 'Oceania'
    },
    {
        nation_name : 'Germany',
        flag : "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
        population : '83 millions',
        continent : 'Europe'
    },
    {
        nation_name : 'France',
        flag : "https://cdn.britannica.com/82/682-050-8AA3D6A6/Flag-France.jpg",
        population : '68 millions',
        continent : 'Europe'
    },
    {
        nation_name : 'Egypt',
        flag : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/125px-Flag_of_Egypt.svg.png",
        population : '104 millions',
        continent : 'Africa'
    }
]
const nation_list = document.getElementsByClassName('nation_list');

function createItemList(item){
    const img = document.createElement('img');
    img.width = '216px';
    img.height = '144px';
    img.src = item.flag;

    const flag1 = document.createElement('div');
    flag1.classList.add('flag');
    flag1.appendChild(img);

    const nation_name1 = document.createElement('div');
    nation_name1.innerHTML = item.nation_name;

    const population1 = document.createElement('div');
    population1.innerHTML = 'Population : ' + item.population;

    const continent1 = document.createElement('div');
    continent1.innerHTML = 'Continent : '  + item.continent;

    const wrapper = document.createElement('li');
    wrapper.classList.add('nation');
    wrapper.appendChild(nation_name1);
    wrapper.appendChild(flag1);
    wrapper.appendChild(population1);
    wrapper.appendChild(continent1);

    nation_list[0].appendChild(wrapper);
}
ITEMS.forEach(item => {
    createItemList(item);
})
>>>>>>> Stashed changes
