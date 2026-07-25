import { prisma } from "@/lib/prisma";
async function main() {

    const user = await prisma.user.create({
        data: {
            email:"shafiya@gmail.com",
            password:"password",
            firstname: "Shafiya",
            lastname: "Shinaash",
            // emailVerifiedAt : Date.now()



        }
    })
    console.log("user", user);
    
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });