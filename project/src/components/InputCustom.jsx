import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function InputCustom({value, onChange}) {
const handleChange = (e) => {
onChange(e.target.value);
}

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField value={value} onChange={handleChange} id="outlined-basic" label="Outlined" variant="outlined" />
    </Box>
  );
}