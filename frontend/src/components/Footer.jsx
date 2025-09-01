import React from 'react'
import { Dumbbell } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
      <aside>
          <div className='flex'>
            Copyright © {new Date().getFullYear()} - All right reserved by
            FitRack
            <Dumbbell className="size-4" />
          </div>
      </aside>
    </footer>
  );
}

export default Footer
