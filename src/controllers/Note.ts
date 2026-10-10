import type { Request, Response } from "express";
import { Note } from "../models/index.js";

export class NoteController {
  async getAllNotes(req: Request, res: Response) {
    const notes = await Note.findAll()
    res.json({ data: notes })
  }
}