'use client';
import { useRouter } from 'next/navigation';
import Button from '@mui/material/Button';

export default function UserProfile() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/logout', {
        method: 'POST',
      });

      if (response.ok) {
        await router.push('/');
      } else {
        console.error('Failed to logout:', response.statusText);
      }
    } catch (error) {
      console.error('Error occurred during logout:', error);
    }
  };

  return (
    <div>
      <h1>Profile page!</h1>
      <Button size="large" variant="contained" onClick={handleLogout}>
        Logga Ut
      </Button>
    </div>
  );
}
