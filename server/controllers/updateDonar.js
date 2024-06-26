import asyncHandler from "express-async-handler";
import prisma from "../config/prisma.js";

export const updateDonar = asyncHandler(async (req, res) => {
  // get donar id from params
  const { id } = req.params;

  // get donar data from body
  const {
    fullname,
    email,
    phone,
    age,
    weight,
    address,
    motherNumber,
    bloodType,
  } = req.body;

  // check if donar exists
  const donarExists = await prisma.donar.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!donarExists) {
    res.status(404);
    throw new Error("Donar not exists");
  }
  // update donar

  const updatedDonar = await prisma.donar.update({
    where: {
      id: Number(id),
    },
    data: {
      fullname,
      email,
      phone,
      age,
      weight,
      address,
      motherNumber,
      bloodType,
      status,
    },
  });

  // return updated donar

  res.status(200).json({
    success: true,
    error: false,
    message: "updated successfully",
  });
});
