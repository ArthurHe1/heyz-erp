import { CreateCategoryCommandHandler } from "./material/category/create-category-command";
import { DisableCategoryCommandHandler } from "./material/category/disable-category-command";
import { EnableCategoryCommandHandler } from "./material/category/enable-category-command";
import { RemoveCategoryCommandHandler } from "./material/category/remove-category-command";
import { UpdateCategoryCommandHandler } from "./material/category/update-category-command";
export declare const commands: (typeof CreateCategoryCommandHandler | typeof DisableCategoryCommandHandler | typeof EnableCategoryCommandHandler | typeof RemoveCategoryCommandHandler | typeof UpdateCategoryCommandHandler)[];
