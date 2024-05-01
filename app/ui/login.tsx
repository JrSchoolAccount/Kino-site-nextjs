import { CssVarsProvider, Sheet } from "@mui/joy";

export default function Login() {
    return (
        <CssVarsProvider>
            <Sheet variant="outlined" >Welcome!</Sheet>
        </CssVarsProvider>
    );
}