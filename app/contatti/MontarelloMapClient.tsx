'use client';
import dynamic from 'next/dynamic';

const MontarelloMap = dynamic(() => import('./MontarelloMap'), { ssr: false });
export default MontarelloMap;
