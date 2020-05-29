// The following code keeps looping forever. (You can hit Ctrl-C to stop it.)
// Why is that? Also modify it so that it stops after the first iteration.

// The loop has no conditional, so JS treats it as true.

let i;

for (i = 0; i < 1; i += 1) {
  console.log("and on");
}

// LS solution:
for (i = 0; ; i += 1) {
  console.log("and on");
  break;
}