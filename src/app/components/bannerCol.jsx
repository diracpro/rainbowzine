import * as React from 'react';

function BannerCol() {
    return (
        <div className="w-full bg-cover h-64 bg-center bg-[url('https://t3.ftcdn.net/jpg/02/34/44/16/360_F_234441670_C9KlCIyfp2l8tLKHrr4CNjctGz252bg5.jpg')]">
          <div className="flex items-l justify-l h-full w-full p-6 bg-gray-900 bg-opacity-50">
            <div className="text-center">
              <h1 className="text-white text-2xl font-semibold uppercase md:text-3xl">The MATRIX Time</h1>
              <p className='justify-l'>Collection</p>
            </div>
          </div>
        </div>

    );
}
export default BannerCol;