'use client';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

export default function BackButton() {
  return (
    <Container sx={{ margin: 2 }}>
      <Link href="/filmer" variant="body2">
        {'< Tillbaka till filmer'}
      </Link>
    </Container>
  );
}
