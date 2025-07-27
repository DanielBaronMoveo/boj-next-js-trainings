import Header from "@/components/Header/Header";
import CreateInvestmentForm from "@/components/CreateInvestmentForm";
import CreatePageSidebar from "@/components/CreatePageSidebar";
import CreatePageFooter from "@/components/CreatePageFooter";

export default function CreateInvestmentPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="flex">
        <CreatePageSidebar />

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <CreateInvestmentForm />
          </div>
        </div>
      </div>

      <CreatePageFooter />
    </div>
  );
}
