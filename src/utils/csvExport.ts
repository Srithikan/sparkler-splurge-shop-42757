import { Cracker } from "@/data/crackers";

interface CartItem {
  product: Cracker;
  quantity: number;
}

export const downloadOrderAsCSV = (items: CartItem[]) => {
  // Create CSV header
  const headers = ["Product Name", "Unit", "Quantity", "Unit Price (₹)", "Total Price (₹)"];
  
  // Create CSV rows
  const rows = items.map(item => [
    item.product.name,
    item.product.unit,
    item.quantity.toString(),
    item.product.discountedPrice.toString(),
    (item.product.discountedPrice * item.quantity).toString()
  ]);

  // Calculate total
  const total = items.reduce(
    (sum, item) => sum + item.product.discountedPrice * item.quantity,
    0
  );

  // Add empty row and total
  rows.push([]);
  rows.push(["", "", "", "Grand Total:", total.toString()]);

  // Combine headers and rows
  const csvContent = [
    headers.join(","),
    ...rows.map(row => row.join(","))
  ].join("\n");

  // Create blob and download
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  
  const date = new Date().toISOString().split("T")[0];
  link.setAttribute("href", url);
  link.setAttribute("download", `cracker_order_${date}.csv`);
  link.style.visibility = "hidden";
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
