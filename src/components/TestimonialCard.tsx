interface TestimonialCardProps {
  quote: string;
  author: string;
  location?: string;
  result?: string;
}

export default function TestimonialCard({
  quote,
  author,
  location,
  result,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md h-full">
      <div className="mb-4">
        <div className="flex text-gold">
          {'★★★★★'.split('').map((star, i) => (
            <span key={i} className="text-2xl">{star}</span>
          ))}
        </div>
      </div>
      <blockquote className="text-slate mb-4 italic">
        "{quote}"
      </blockquote>
      {result && (
        <p className="text-sm text-primary font-semibold mb-2">{result}</p>
      )}
      <div className="border-t pt-4">
        <p className="font-semibold text-slate">{author}</p>
        {location && (
          <p className="text-sm text-slate/70">{location}</p>
        )}
      </div>
    </div>
  );
}
