// src/routes/api/news/+server.ts
import { PrismaClient } from '@prisma/client';
import type { RequestHandler } from '@sveltejs/kit';

const prisma = new PrismaClient();

// POST /api/news
export const POST: RequestHandler = async ({ request }) => {
  try {
    const requestBody = await request.json();

    if (!requestBody.title ||!requestBody.content ||!requestBody.category ||!requestBody.image) {
      return {
        status: 400,
        body: JSON.stringify({ error: 'Invalid request body. Please provide title, content, category, and image.' }),
      };
    }

    const { title, content, category, image } = requestBody;

    // Find the categoryId from the category name
    const categoryRecord = await prisma.category.findUnique({
      where: { name: category },
    });

    if (!categoryRecord) {
      return {
        status: 404,
        body: JSON.stringify({ error: `Category '${category}' not found.` }),
      };
    }

    const news = await prisma.news.create({
      data: {
        title,
        content,
        image,
        categoryId: categoryRecord.id,
      },
    });

    return {
      status: 201,
      body: JSON.stringify(news),
    };
  } catch (error) {
    console.error('Error creating news:', error.message, error.stack);
    return {
      status: 500,
      body: JSON.stringify({ error: `Error creating news: ${error.message || 'Unknown error'}` }),
    };
  }
};

// GET /api/news
export const GET: RequestHandler = async () => {
  try {
    const news = await prisma.news.findMany({
      include: {
        category: true,
      },
    });

    return {
      status: 200,
      body: JSON.stringify(news),
    };
  } catch (error) {
    console.error('Error fetching news:', error.message, error.stack);
    return {
      status: 500,
      body: JSON.stringify({ error: `Error fetching news: ${error.message || 'Unknown error'}` }),
    };
  }
};