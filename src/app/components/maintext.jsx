import * as React from 'react';
import { Square2StackIcon } from '@heroicons/react/24/solid';

function MainText() {
    return (

    <div className='h-full'>
        <h1 className='font-osw text-4xl md:text-6xl pb-3'>SYM: Symbol</h1>
        
        <table className="font-pop table-auto text-xs sm:text-sm border-collapse border border-slate-200 dark:border-slate-700 my-10">
            <tbody>
            <tr>
                <td className='p-4 border-collapse border border-slate-200 dark:border-slate-700'>
                    <div className='flex flex-wrap'><Square2StackIcon className="mr-4 h-5 w-5" />1000 000 000 Supply</div>
                </td>
                <td className='p-4 border-collapse border dark:border-slate-700'>
                    <div className='flex flex-wrap'>
                        <a href="https://x.com/TMTCOLLECTIONS" target="_blank" rel="noreferrer" className="mr-4 text-xl hover:text-gray-300 dark:hover:text-gray-200">
                        <span className="[&>svg]:h-5 [&>svg]:w-5">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 512 512">
                        <path
                        d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                        </svg>
                        </span>
                        </a>TMTCOLLECTIONS
                    </div>
                </td>
                <td className='p-4 border-collapse border border-slate-200 dark:border-slate-700'>
                    <div className='flex flex-wrap'>
                        <a href="https://discord.gg/6Tj2Sac" target="_blank" rel="noreferrer" className="mr-4 text-xl hover:text-teal-300 dark:hover:text-teal-200">
                        <span className="[&>svg]:h-5 [&>svg]:w-5">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 640 512">
                        <path
                            d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z" />
                        </svg>
                        </span>
                        </a>TMTCOLLECTIONS
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
       
        <p className='font-pop font-semibold justify-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget est a velit egestas vehicula ut eget orci. Duis porta turpis ipsum, id ornare turpis viverra quis.</p>
        <p className='font-pop pt-3.5 justify-normal'>Nunc aliquet vestibulum luctus. Mauris sit amet lorem maximus, mollis elit a, tempor augue. Pellentesque eu tempor tellus.</p>
        <p className='font-pop pt-3.5 justify-normal'>Sed viverra sed nibh a pulvinar. Ut commodo consectetur arcu, a dapibus turpis tincidunt non. Nunc malesuada, nulla nec gravida facilisis, lectus neque hendrerit lectus, ut tempus ante enim quis purus.</p>
        <p className='font-pop pt-3.5 justify-normal'>Aenean sagittis urna imperdiet tempus sollicitudin.</p>
    </div>

    );
}
export default MainText;