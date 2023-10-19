import { Badge } from "@/components/ui/badge";
import { Category } from "@prisma/client";
import { HeadphonesIcon, KeyboardIcon, MonitorIcon, MouseIcon, SpeakerIcon, SquareIcon } from "lucide-react";

interface ICategoryItemProps {
  category: Category
}

const CategoryItem = ({category}:ICategoryItemProps) => {
  const categoryIcon = {
    keyboards: <KeyboardIcon/>,
    monitors: <MonitorIcon/>,
    headphones: <HeadphonesIcon/>,
    mousepads: <SquareIcon/>,
    speakers: <SpeakerIcon/>,
    mouses: <MouseIcon/>,
  }
  return ( 
      <Badge variant="outline" 
      className="flex items-center justify-center py-3 gap-2 rounded-lg py-3">
        {categoryIcon[category.slug as keyof typeof categoryIcon]}
        <span className="text-xs font-bold">{category.name}</span>
      </Badge>
   );
}
 
export default CategoryItem;