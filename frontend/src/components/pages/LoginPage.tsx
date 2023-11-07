import loginBg from "@/assets/images/bg4.jpg";
import * as Icons from "@mui/icons-material/";
import { Box, InputAdornment } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { User, UserType } from "@/types/user.type";
import { Controller, useForm } from "react-hook-form";

const Login = () => {
  const classes: any = {
    root: { display: "flex", justifyContent: "center", alignItems: "center" },
    submitBtn: { marginTop: 4 },
    canelBtn: { marginTop: 2 },
  };

  const initialValue: User = {
    username: "admin",
    password: "1234",
  };

  const { control, handleSubmit } = useForm<User>({
    defaultValues: initialValue,
  });

  const showForm = () => {
    return (
      <form
        noValidate
        onSubmit={handleSubmit((values) => {
          alert(JSON.stringify(values));
        })}
      >
        {/* Username */}
        <Controller
          control={control}
          name="username"
          render={({ field }) => (
            <TextField
              {...field}
              error
              helperText="Invalid Username"
              variant="outlined"
              margin="normal"
              fullWidth
              label="Username"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Icons.Email />
                  </InputAdornment>
                ),
              }}
              autoComplete="email"
              autoFocus
            />
          )}
        />

        {/* Password */}
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <TextField
              {...field}
              variant="outlined"
              margin="normal"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Icons.Password />
                  </InputAdornment>
                ),
              }}
              label="Password"
              type="password"
            />
          )}
        />

        <Button
          sx={classes.submitBtn}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Login
        </Button>

        <Button
          onClick={() => {}}
          type="button"
          fullWidth
          variant="outlined"
          className="border-dashed border-1 border-gray-300 mt-4"
          color="primary"
        >
          Register
        </Button>
      </form>
    );
  };

  return (
    <Box className="flex justify-center items-center">
      <Card className="max-w-[345px]">
        <CardContent>
          <Typography gutterBottom variant="h5">
            Login
          </Typography>
          {showForm()}
        </CardContent>
      </Card>
      <style>
        {`
          body {
            min-height: 100vh;
            position: relative;
            margin: 0;
            background-size: cover;
            background-image: url(${loginBg});
            text-align: center;
          }
        `}
      </style>
    </Box>
  );
};

export default Login;
