import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-center">All About Cats</h1>
      
      <div className="max-w-4xl mx-auto">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" 
          alt="Cute cat" 
          className="mx-auto object-cover w-full h-[400px] rounded-lg mb-8"
        />
        
        <p className="text-lg mb-8">
          Cats are fascinating creatures that have been domesticated for thousands of years. 
          Known for their independence, agility, and affectionate nature, cats make wonderful companions 
          for millions of people around the world.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">Characteristics of Cats</h2>
        <ul className="list-disc list-inside mb-8">
          <li>Excellent hunters with sharp claws and teeth</li>
          <li>Flexible bodies and quick reflexes</li>
          <li>Keen senses, especially their night vision</li>
          <li>Communicate through vocalizations, body language, and scent</li>
          <li>Sleep for 12-16 hours a day</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mb-4">Popular Cat Breeds</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["Siamese", "Maine Coon", "Persian"].map((breed) => (
            <Card key={breed}>
              <CardHeader>
                <CardTitle>{breed}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>A popular cat breed known for its unique characteristics.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
