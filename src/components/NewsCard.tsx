import { Link } from "react-router-dom";

interface NewsCardProps {
  image: string;
  category: string;
  date?: string;
  title: string;
  excerpt?: string;
  link?: string;
}

const NewsCard = ({ image, category, date, title, excerpt, link = "#" }: NewsCardProps) => {
  return (
    <Link 
      to={link}
      className="group block bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-primary text-sm font-semibold uppercase tracking-wide">
            {category}
          </span>
          {date && (
            <>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground text-sm">{date}</span>
            </>
          )}
        </div>
        <h3 className="text-lg font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        {excerpt && (
          <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
            {excerpt}
          </p>
        )}
      </div>
    </Link>
  );
};

export default NewsCard;
