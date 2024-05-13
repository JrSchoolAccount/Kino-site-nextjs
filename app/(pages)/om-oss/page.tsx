import connectDB from '@/app/lib/dbTest';

export default function OmOss() {
  connectDB();

  return (
    <div className='text-center m-20'>
      <h2>Om oss</h2>
    </div>
  );
}
