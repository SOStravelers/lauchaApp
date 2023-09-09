import Router from "express";
const router = Router();

import { createTestTemplate, createTestTemplateFile, deleteTestTemplate, sendTestEmail, sendTestTemplate, updateTestTemplate} from "../controllers/test.js";

router.get("/emailTest",sendTestEmail);
router.get("/createTestTemplate",createTestTemplate);
router.get("/sendTestTemplate",sendTestTemplate);
router.get("/deleteTestTemplate",deleteTestTemplate);
router.get("/updateTestTemplate",updateTestTemplate);
router.get("/createTestTemplateFile",createTestTemplateFile);


export default router;